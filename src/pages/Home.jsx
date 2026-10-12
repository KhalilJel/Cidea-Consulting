import React from "react";
import { home, ui } from "../content.js";
import { listArticles } from "../articles.js";
import { localize } from "../routes.js";
import { Arrow } from "../components/Layout.jsx";
import { CtaBand, Icon, OfferCards, SectionHead, Serif } from "../components/Blocks.jsx";

// Floating product-style card: an example opportunity map. Clearly labelled
// as an illustration; it contains no client data.
function OpportunityMock({ lang }) {
  const m = home[lang].mock;
  return (
    <figure className="mockCard" aria-label={`${ui[lang].illustration}: ${m.label}`}>
      <div className="mockHead">
        <span className="mockTitle">
          <Icon name="compass" size={18} /> {m.label}
        </span>
        <span className="statusPill">
          <i aria-hidden="true" /> {m.status}
        </span>
      </div>
      <div className="bubble ask">{m.question}</div>
      <div className="bubble reply">{m.answer}</div>
      <table className="mockTable">
        <thead>
          <tr>
            {m.columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {m.rows.map(([name, value, complexity, top]) => (
            <tr key={name} className={top ? "top" : undefined}>
              <th scope="row">{name}</th>
              <td>
                <span className={"tag" + (top ? " mint" : "")}>{value}</span>
              </td>
              <td>
                <span className="tag">{complexity}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="mockFoot">
        <span>
          <Icon name="check" size={16} /> {m.foot}
        </span>
        <span className="mockNote">{ui[lang].illustration}</span>
      </figcaption>
    </figure>
  );
}

function AgentDiagram({ lang }) {
  const d = home[lang].agentDiagram;
  return (
    <div className="agentDiagram" role="img" aria-label={`${d.goal}: ${d.goalText} → ${d.agent} → ${d.tools.join(", ")} → ${d.human} → ${d.result}`}>
      <div className="node goal">
        <span className="smallCaps">{d.goal}</span>
        <strong>{d.goalText}</strong>
      </div>
      <i className="link" aria-hidden="true" />
      <div className="node agent">
        <Icon name="agents" />
        <strong>{d.agent}</strong>
      </div>
      <i className="link" aria-hidden="true" />
      <div className="toolRow">
        {d.tools.map((tool) => (
          <span key={tool} className="node tool">
            {tool}
          </span>
        ))}
      </div>
      <i className="link" aria-hidden="true" />
      <div className="node human">
        <Icon name="person" />
        <strong>{d.human}</strong>
      </div>
      <i className="link" aria-hidden="true" />
      <div className="node result">
        <Icon name="check" />
        <strong>{d.result}</strong>
      </div>
    </div>
  );
}

const principleIcons = ["target", "person", "shield", "check"];

export function Home({ lang }) {
  const h = home[lang];
  const t = ui[lang];
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap heroGrid">
          <div className="heroCopy">
            <p className="pill">{h.pill}</p>
            <Serif parts={h.title} as="h1" id="hero-title" className="display" />
            <p className="lead">{h.lead}</p>
            <div className="actions">
              <a className="button primary" href={localize(lang, "/contact")}>
                {t.cta} <Arrow />
              </a>
              <a className="button outline" href="#method">
                {t.secondaryCta}
              </a>
            </div>
            <p className="fineprint">{t.noCost}</p>
          </div>
          <div className="heroVisual">
            <OpportunityMock lang={lang} />
          </div>
        </div>
      </section>

      <section className="section principle" aria-labelledby="principle-title">
        <div className="wrap principleGrid">
          <div>
            <p className="smallCaps">{h.principleLabel}</p>
            <h2 className="serif statement" id="principle-title">
              {h.principle[0]} <em>{h.principle[1]}</em>
            </h2>
          </div>
          <div>
            <p className="bodyLarge">{h.principleBody}</p>
            <ul className="questionPills">
              {h.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="offers-title">
        <div className="wrap">
          <SectionHead label={h.offersLabel} title={h.offersTitle} body={h.offersBody} id="offers-title" />
          <OfferCards lang={lang} />
        </div>
      </section>

      <section className="section method" id="method" aria-labelledby="method-title">
        <div className="wrap methodGrid">
          <SectionHead label={h.methodLabel} title={h.methodTitle} id="method-title" />
          <ol className="timeline">
            {h.method.map(([title, text], i) => (
              <li key={title}>
                <span className="dot" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tinted" aria-labelledby="use-title">
        <div className="wrap">
          <SectionHead label={h.useLabel} title={h.useTitle} id="use-title" />
          <ul className="useGrid">
            {h.useCases.map(([title, text, kind]) => (
              <li key={title}>
                <span className="tag outline">{kind}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="agent-title">
        <div className="wrap agentGrid">
          <div>
            <p className="smallCaps">{h.agentLabel}</p>
            <Serif parts={h.agentTitle} id="agent-title" />
            <p className="bodyLarge">{h.agentBody}</p>
            <a className="textLink" href={localize(lang, "/ai-agent-systems")}>
              {t.readMore} <Arrow />
            </a>
          </div>
          <AgentDiagram lang={lang} />
        </div>
      </section>

      <section className="section" aria-labelledby="principles-title">
        <div className="wrap">
          <SectionHead label={h.principlesLabel} title={h.principlesTitle} id="principles-title" />
          <ul className="proofGrid">
            {h.principles.map(([title, text], i) => (
              <li key={title}>
                <span className="iconBadge">
                  <Icon name={principleIcons[i]} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="insights-title">
        <div className="wrap">
          <div className="headRow">
            <SectionHead label={h.insightsLabel} title={h.insightsTitle} id="insights-title" />
            <a className="textLink" href={localize(lang, "/blog")}>
              {t.allArticles} <Arrow />
            </a>
          </div>
          <ArticleCards lang={lang} limit={3} />
        </div>
      </section>

      <CtaBand lang={lang} title={h.finalTitle} body={h.finalBody} />
    </>
  );
}

export function ArticleCards({ lang, limit, exclude, headingLevel = 3 }) {
  const t = ui[lang];
  const Tag = "h" + headingLevel;
  const list = listArticles(lang)
    .filter((a) => a.slug !== exclude)
    .slice(0, limit);
  return (
    <ul className="articleCards">
      {list.map((a) => (
        <li key={a.slug}>
          <a href={localize(lang, "/blog/" + a.slug)}>
            <span className="smallCaps muted">
              {a.minutes} {t.minRead}
            </span>
            <Tag>{a.title}</Tag>
            <p>{a.intro}</p>
            <span className="offerLink">
              {t.readArticle} <Arrow />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
