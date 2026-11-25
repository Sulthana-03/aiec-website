"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { filterChips, projects, type ProjectFilter } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  // the original marks every card as revealed once a chip has been clicked
  const [touched, setTouched] = useState(false);

  const choose = (f: ProjectFilter) => {
    setFilter(f);
    setTouched(true);
  };

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="sec-top">
          <Reveal className="sec-head">
            <span className="eyebrow">Featured Projects</span>
            <h2>Installed across Kuwait’s skyline</h2>
            <p>Browse the building types where AIEC equipment keeps people moving every day.</p>
          </Reveal>
          <Reveal as="a" href="#contact" className="link-arrow" style={{ marginBottom: "clamp(28px,4vw,48px)" }}>
            View all projects <Icon id="i-arrow" />
          </Reveal>
        </div>
        <Reveal className="filters" role="tablist" aria-label="Filter projects by sector">
          {filterChips.map((c) => (
            <button
              key={c.id}
              className={"chip" + (filter === c.id ? " on" : "")}
              data-f={c.id}
              role="tab"
              aria-selected={filter === c.id}
              onClick={() => choose(c.id)}
            >
              {c.label}
            </button>
          ))}
        </Reveal>
        <div className="proj-grid">
          {projects.map((p) => (
            <Reveal
              as="a"
              href="#contact"
              className={"proj" + (filter !== "all" && p.sector !== filter ? " hide" : "")}
              delay={p.delay}
              forceIn={touched}
              data-s={p.sector}
              key={p.sector}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.alt} loading="lazy" />
              <div className="cap">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
