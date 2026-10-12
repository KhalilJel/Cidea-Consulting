import React from "react";
import { services, ui } from "../content.js";
import { localize } from "../routes.js";
import { Arrow } from "./Layout.jsx";

// Keep "AI-" compounds together in headings (non-breaking hyphen).
export const nbh = (text) => text.replace(/AI-/g, "AI‑");

// Serif headline with one mint, italic phrase (Grove's “Meet *Grace*” pattern).
// parts: [before, accent] or [before, accent, after]
export function Serif({ parts, as: Tag = "h2", className = "", id }) {
  const [before, accent, after] = parts.map((p) => p && nbh(p));
  return (
    <Tag className={"serif " + className} id={id}>
      {before} <em>{accent}</em>
      {after ? <> {after}</> : null}
    </Tag>
  );
}

const ICONS = {
  compass: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 5.5-2 5-5 2 2-5 5-2Z",
  report: "M7 3h7l4 4v14H7V3Zm7 0v4h4M10 12h5M10 15.5h5M10 9h2",
  people: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 0a2.5 2.5 0 1 0 0-5M3.5 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5M15 14c2.4 0 4.3 1.7 5 5",
  build: "M4 20h16M6 20V9l6-5 6 5v11M10 20v-5h4v5",
  agents: "M12 4v3M12 17v3M4 12h3M17 12h3M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6.3 6.3l2 2M15.7 15.7l2 2M6.3 17.7l2-2M15.7 8.3l2-2",
  check: "M5 12.5 10 17l9-10",
  shield: "M12 3 5 6v6c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6l-7-3Z",
  target: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  person: "M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5 20c.8-3.6 3.6-6 7-6s6.2 2.4 7 6",
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6",
};

export function Icon({ name, size = 22 }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false">
      <path d={ICONS[name]} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SectionHead({ label, title, body, id, center = false }) {
  return (
    <div className={"sectionHead" + (center ? " center" : "")}>
      {label && <p className="smallCaps">{label}</p>}
      <Serif parts={title} id={id} />
      {body && <p className="sectionBody">{body}</p>}
    </div>
  );
}

export function OfferCards({ lang, exclude }) {
  const t = ui[lang];
  return (
    <ul className="offerCards">
      {services
        .filter((s) => s.key !== exclude)
        .map((s, i) => {
          const c = s[lang];
          // The free entry assessment leads the list as a wide "start here" card.
          const feature = i === 0 && s.key === services[0].key;
          return (
            <li key={s.key} className={feature ? "feature" : undefined}>
              <a href={localize(lang, "/" + s.key)}>
                <span className="offerTop">
                  <span className="iconBadge">
                    <Icon name={s.icon} />
                  </span>
                  <span className="smallCaps">{feature ? c.pill : c.priceLabel}</span>
                </span>
                <span className="offerPrice">{c.price}</span>
                <h3>{nbh(c.name)}</h3>
                <span className="offerSummary">{c.summary}</span>
                <span className="offerLink">
                  {t.readMore} <Arrow />
                </span>
              </a>
            </li>
          );
        })}
    </ul>
  );
}

export function CtaBand({ lang, title, body }) {
  const t = ui[lang];
  return (
    <section className="ctaBand" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="ctaPanel">
          <Serif parts={title} id="cta-title" className="ctaTitle" />
          <p className="ctaBody">{body}</p>
          <div className="actions center">
            <a className="button primary" href={localize(lang, "/contact")}>
              {t.cta} <Arrow />
            </a>
            <a className="button outline" href={`${localize(lang, "/")}#method`}>
              {t.secondaryCta}
            </a>
          </div>
          <p className="fineprint">{t.noCost}</p>
        </div>
      </div>
    </section>
  );
}
