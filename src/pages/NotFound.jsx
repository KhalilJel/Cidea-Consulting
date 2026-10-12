import React from "react";
import { notFound, services, ui } from "../content.js";
import { localize } from "../routes.js";
import { Arrow } from "../components/Layout.jsx";
import { Serif } from "../components/Blocks.jsx";

export function NotFound({ lang }) {
  const n = notFound[lang];
  const t = ui[lang];
  const links = [
    [localize(lang, "/"), t.backHome],
    ...services.map((s) => [localize(lang, "/" + s.key), s[lang].name]),
    [localize(lang, "/contact"), t.contact],
  ];
  return (
    <section className="pageHero notFound" aria-labelledby="page-title">
      <div className="wrap">
        <p className="pill">{n.pill}</p>
        <Serif parts={n.title} as="h1" id="page-title" className="display" />
        <p className="lead">{n.body}</p>
        <ul className="notFoundLinks">
          {links.map(([href, label]) => (
            <li key={href}>
              <a className="textLink" href={href}>
                {label} <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
