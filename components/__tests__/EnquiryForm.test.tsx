import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import CtaLink from "@/components/CtaLink";
import { EnquiryProvider } from "@/components/EnquiryContext";
import EnquiryForm, { FORM_ERROR_MESSAGE, FORM_SUCCESS_MESSAGE } from "@/components/EnquiryForm";

function setup() {
  return render(
    <EnquiryProvider>
      <CtaLink href="#contact" type="quote">
        quote-cta
      </CtaLink>
      <CtaLink href="#contact" type="service">
        service-cta
      </CtaLink>
      <EnquiryForm />
    </EnquiryProvider>,
  );
}

describe("EnquiryForm", () => {
  it("requires name and email", () => {
    setup();
    expect(screen.getByLabelText("Full name")).toBeRequired();
    expect(screen.getByLabelText("Email")).toBeRequired();
    expect(screen.getByLabelText("Phone")).not.toBeRequired();
  });

  it("renders the three type options with Request a Quote selected by default", () => {
    setup();
    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
    expect(screen.getByLabelText("Request a Quote")).toBeChecked();
    expect(screen.getByLabelText("Request Service")).not.toBeChecked();
    expect(screen.getByLabelText("General Enquiry")).not.toBeChecked();
  });

  it("preselects Request Service when a data-type=service CTA is clicked", async () => {
    const user = userEvent.setup();
    setup();
    const cta = screen.getByText("service-cta");
    expect(cta).toHaveAttribute("data-type", "service");
    await user.click(cta);
    expect(screen.getByLabelText("Request Service")).toBeChecked();
    expect(screen.getByLabelText("Request a Quote")).not.toBeChecked();

    await user.click(screen.getByText("quote-cta"));
    expect(screen.getByLabelText("Request a Quote")).toBeChecked();
  });

  it("lets the visitor pick a type directly", async () => {
    const user = userEvent.setup();
    setup();
    await user.click(screen.getByLabelText("General Enquiry"));
    expect(screen.getByLabelText("General Enquiry")).toBeChecked();
    expect(screen.getByLabelText("Request a Quote")).not.toBeChecked();
  });

  it("shows the success message when submitted with valid data", async () => {
    const user = userEvent.setup();
    setup();
    await user.type(screen.getByLabelText("Full name"), "Sara Ahmad");
    await user.type(screen.getByLabelText("Email"), "sara@example.com");
    await user.click(screen.getByRole("button", { name: /Send Enquiry/ }));
    const status = screen.getByRole("status");
    expect(status).toHaveTextContent(FORM_SUCCESS_MESSAGE);
    expect(status).toHaveClass("show");
  });

  it("does not show the success message when required fields are empty", async () => {
    const user = userEvent.setup();
    setup();
    await user.click(screen.getByRole("button", { name: /Send Enquiry/ }));
    const status = screen.getByRole("status");
    expect(status).not.toHaveTextContent(FORM_SUCCESS_MESSAGE);
    expect(status).toHaveTextContent(FORM_ERROR_MESSAGE);
  });

  it("rejects an invalid email address", async () => {
    const user = userEvent.setup();
    setup();
    await user.type(screen.getByLabelText("Full name"), "Sara Ahmad");
    await user.type(screen.getByLabelText("Email"), "not-an-email");
    await user.click(screen.getByRole("button", { name: /Send Enquiry/ }));
    expect(screen.getByRole("status")).toHaveTextContent(FORM_ERROR_MESSAGE);
  });
});
