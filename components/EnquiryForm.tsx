"use client";

import { useState, type FormEvent } from "react";
import { useEnquiry, type EnquiryType } from "./EnquiryContext";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { productOptions } from "@/data/site";

const enquiryTypes: { value: EnquiryType; label: string }[] = [
  { value: "quote", label: "Request a Quote" },
  { value: "service", label: "Request Service" },
  { value: "general", label: "General Enquiry" },
];

export const FORM_ERROR_MESSAGE = "Please enter your name and a valid email address.";
export const FORM_SUCCESS_MESSAGE =
  "Form preview: your details are valid, but this form is not connected to email or a CRM yet, so nothing has been sent.";

export default function EnquiryForm() {
  const { type, setType } = useEnquiry();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const n = name.trim();
    const m = email.trim();
    if (!n || !/^\S+@\S+\.\S+$/.test(m)) {
      setMessage(FORM_ERROR_MESSAGE);
      return;
    }
    setMessage(FORM_SUCCESS_MESSAGE);
  };

  return (
    <Reveal as="form" className="enq" delay="d1" id="enq" noValidate onSubmit={onSubmit}>
      <h3>Send us an enquiry</h3>
      <p>Choose the type of request and we’ll route it to the right team.</p>
      <div className="fgrid">
        <div className="field full">
          <span className="lbl" style={{ fontSize: ".82rem", fontWeight: 600, color: "var(--ink)" }}>
            I need to
          </span>
          <div className="seg" role="radiogroup" aria-label="Enquiry type">
            {enquiryTypes.map((t) => (
              <label key={t.value}>
                <input
                  type="radio"
                  name="type"
                  value={t.value}
                  checked={type === t.value}
                  onChange={() => setType(t.value)}
                />
                <span>{t.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="field">
          <label htmlFor="f-name">Full name</label>
          <input
            id="f-name"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="f-co">Company / building</label>
          <input id="f-co" name="company" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="f-mail">Email</label>
          <input
            id="f-mail"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="f-tel">Phone</label>
          <input id="f-tel" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field full">
          <label htmlFor="f-prod">Product / equipment</label>
          <select id="f-prod" name="product">
            {productOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="f-msg">Message</label>
          <textarea
            id="f-msg"
            name="message"
            placeholder="Tell us about your building, location and requirements…"
          ></textarea>
        </div>
      </div>
      <button type="submit" className="btn btn-red" style={{ marginTop: "22px", width: "100%" }}>
        Send Enquiry <Icon id="i-send" />
      </button>
      <div className={"form-msg" + (message ? " show" : "")} id="formMsg" role="status">
        {message}
      </div>
      <p className="form-note">By submitting you agree to be contacted about your enquiry.</p>
    </Reveal>
  );
}
