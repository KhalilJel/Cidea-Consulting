import React from "react";
import { services, servicePage, ui } from "../content.js";
import { localize } from "../routes.js";
import { Arrow } from "../components/Layout.jsx";
import { CtaBand, Icon, OfferCards, Serif } from "../components/Blocks.jsx";

export function Service({ lang, serviceKey }) {
  const service = services.find((x) => x.key === serviceKey);
  const s = service[lang];
  const p = servicePage[lang];
  const t = ui[lang];
  return (
    <>
      <section className="hero serviceHero" aria-labelledby="page-title">
        <div className="wrap heroGrid">
          <div className="heroCopy">
            <p className="pill">{s.pill}</p>
            <Serif parts={s.title} as="h1" id="page-title" className="display" />
            <p className="lead">{s.lead}</p>
            <div className="actions">
              <a className="button primary" href={localize(lang, "/contact")}>
                {t.cta} <Arrow />
              </a>
              <a className="button outline" href="#included">
                {p.deliverables}
              </a>
            </div>
          </div>
          <aside className="priceCard" aria-label={p.price}>
            <span className="iconBadge large">
              <Icon name={service.icon} size={26} />
            </span>
            <p className="smallCaps">{s.priceLabel}</p>
            <p className="priceBig">{s.price}</p>
            <p className="priceNote">{s.priceNote}</p>
            <ul className="checkList compact">
              {s.deliverables.slice(0, 3).map(([strong]) => (
                <li key={strong}>
                  <Icon name="check" size={18} />
                  {strong}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section" id="included" aria-labelledby="included-title">
        <div className="wrap splitRow">
          <div>
            <p className="smallCaps">{s.name}</p>
            <h2 className="serif" id="included-title">
              {p.deliverables}
            </h2>
          </div>
          <ul className="checkList">
            {s.deliverables.map(([strong, rest]) => (
              <li key={strong}>
                <Icon name="check" size={20} />
                <p>
                  <strong>{strong}</strong> {rest}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tinted" aria-labelledby="process-title">
        <div className="wrap">
          <div className="sectionHead">
            <p className="smallCaps">{p.process}</p>
            <h2 className="serif" id="process-title">
              {s.steps.map(([title]) => title).join(" → ")}
            </h2>
          </div>
          <ol className={"stepCards n" + s.steps.length}>
            {s.steps.map(([title, text], i) => (
              <li key={title}>
                <span className="dot" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="fit-title">
        <div className="wrap splitRow">
          <div>
            <h2 className="serif" id="fit-title">
              {p.fit}
            </h2>
          </div>
          <ul className="fitList">
            {s.fit.map((f) => (
              <li key={f}>
                <Icon name="target" size={20} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="wrap splitRow">
          <div>
            <h2 className="serif" id="faq-title">
              {p.faq}
            </h2>
          </div>
          <div className="faq">
            {s.faq.map(([q, a]) => (
              <details key={q}>
                <summary>
                  <span>{q}</span>
                  <i aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="related-title">
        <div className="wrap">
          <div className="sectionHead">
            <h2 className="serif" id="related-title">
              {p.related}
            </h2>
          </div>
          <OfferCards lang={lang} exclude={serviceKey} />
        </div>
      </section>

      <CtaBand lang={lang} title={p.nextTitle} body={p.nextBody} />
    </>
  );
}
