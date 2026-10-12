import React from "react";
import { blogPage, ui } from "../content.js";
import { getArticle } from "../articles.js";
import { localize } from "../routes.js";
import { Arrow } from "../components/Layout.jsx";
import { CtaBand, Serif } from "../components/Blocks.jsx";
import { Markdown } from "../markdown.jsx";
import { ArticleCards } from "./Home.jsx";

export function BlogIndex({ lang }) {
  const b = blogPage[lang];
  const t = ui[lang];
  return (
    <>
      <section className="pageHero" aria-labelledby="page-title">
        <div className="wrap">
          <p className="pill">{t.insights}</p>
          <Serif parts={b.title} as="h1" id="page-title" className="display" />
          <p className="lead">{b.lead}</p>
        </div>
      </section>
      <section className="section flushTop">
        <div className="wrap">
          <ArticleCards lang={lang} headingLevel={2} />
        </div>
      </section>
      <CtaBand lang={lang} title={b.ctaTitle} body={b.ctaBody} />
    </>
  );
}

export function Article({ lang, slug }) {
  const a = getArticle(lang, slug);
  const b = blogPage[lang];
  const t = ui[lang];
  return (
    <>
      <article className="articlePage" aria-labelledby="page-title">
        <div className="wrap narrow">
          <a className="textLink back" href={localize(lang, "/blog")}>
            <Arrow dir="left" /> {t.allArticles}
          </a>
          <p className="pill">
            {t.insights} · {a.minutes} {t.minRead}
          </p>
          <h1 id="page-title" className="serif articleTitle">
            {a.title}
          </h1>
          <div className="prose">
            <Markdown source={a.body} lang={lang} />
          </div>
        </div>
      </article>
      <section className="section" aria-labelledby="more-title">
        <div className="wrap">
          <div className="sectionHead">
            <h2 className="serif" id="more-title">
              {t.insights}
            </h2>
          </div>
          <ArticleCards lang={lang} limit={3} exclude={slug} />
        </div>
      </section>
      <CtaBand lang={lang} title={b.ctaTitle} body={b.ctaBody} />
    </>
  );
}
