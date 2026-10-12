import React, { useEffect, useRef, useState } from "react";
import { services, ui, site } from "../content.js";
import { localize } from "../routes.js";

export function Arrow({ dir = "right" }) {
  const d = { right: "M5 12h14M13 6l6 6-6 6", down: "M12 5v14M6 13l6 6 6-6", left: "M19 12H5M11 6l-6 6 6 6", up: "M7 17 17 7M8 7h9v9" }[dir];
  return (
    <svg className="arrow" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Mark() {
  return (
    <svg className="mark" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="12" cy="12" r="2.6" fill="#F3F7FA" />
    </svg>
  );
}

function Logo({ lang }) {
  return (
    <a className="logo" href={localize(lang, "/")} aria-label={lang === "en" ? "Cidea Consulting — home" : "Cidea Consulting — forside"}>
      <Mark />
      <span className="logoWord">
        cidea<span>consulting</span>
      </span>
    </a>
  );
}

function navItems(lang) {
  return [...services.map((s) => ({ href: localize(lang, "/" + s.key), label: s[lang].nav, path: "/" + s.key })), { href: localize(lang, "/blog"), label: ui[lang].insights, path: "/blog" }];
}

const isActive = (itemPath, routePath) => routePath === itemPath || routePath.startsWith(itemPath + "/");

function langProps(other) {
  const code = other === "en" ? "en" : "nb";
  return { hrefLang: code, lang: code };
}

export function Header({ route }) {
  const { lang } = route;
  const t = ui[lang];
  const other = lang === "en" ? "no" : "en";
  const switchPath = localize(other, route.page === "notfound" ? "/" : route.path);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const items = [toggleRef.current, ...panelRef.current.querySelectorAll("a")];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => window.innerWidth > 1100 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const items = navItems(lang);

  return (
    <>
      <a className="banner" href={localize(lang, "/contact")}>
        <span>{t.banner}</span>
        <Arrow />
      </a>
      <header className={"siteHeader" + (open ? " menuOpen" : "")}>
        <div className="headerInner">
          <Logo lang={lang} />
          <nav className="desktopNav" aria-label={t.mainNav}>
            {items.map((item) => (
              <a key={item.href} href={item.href} aria-current={isActive(item.path, route.path) ? "page" : undefined}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="headerActions">
            <a className="langSwitch" href={switchPath} {...langProps(other)} aria-label={t.langAria}>
              {t.langShort}
            </a>
            <a className="button primary small headerCta" href={localize(lang, "/contact")}>
              {t.ctaShort}
            </a>
            <button
              ref={toggleRef}
              className="menuToggle"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.closeMenu : t.openMenu}
              onClick={() => setOpen(!open)}
            >
              <span>{open ? t.close : t.menu}</span>
              <i aria-hidden="true" />
            </button>
          </div>
        </div>
        <div id="mobile-menu" className="mobileMenu" ref={panelRef} hidden={!open}>
          <nav aria-label={t.mainNav}>
            {items.map((item) => (
              <a key={item.href} href={item.href} aria-current={isActive(item.path, route.path) ? "page" : undefined} onClick={() => setOpen(false)}>
                {item.label}
                <Arrow />
              </a>
            ))}
            <a href={localize(lang, "/contact")} onClick={() => setOpen(false)}>
              {t.contact}
              <Arrow />
            </a>
          </nav>
          <div className="mobileMenuFoot">
            <a className="button primary" href={localize(lang, "/contact")}>
              {t.cta} <Arrow />
            </a>
            <a className="langSwitch" href={switchPath} {...langProps(other)} aria-label={t.langAria}>
              {t.langLabel}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export function Footer({ route }) {
  const { lang } = route;
  const t = ui[lang];
  const other = lang === "en" ? "no" : "en";
  return (
    <footer className="siteFooter">
      <div className="wrap footerTop">
        <div className="footerBrand">
          <Logo lang={lang} />
          <p>{t.footerTag}</p>
          <a className="footerMail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <nav className="footerCol" aria-label={t.services}>
          <h2>{t.services}</h2>
          {services.map((s) => (
            <a key={s.key} href={localize(lang, "/" + s.key)}>
              {s[lang].name}
            </a>
          ))}
        </nav>
        <nav className="footerCol" aria-label="Cidea Consulting">
          <h2>Cidea Consulting</h2>
          <a href={localize(lang, "/blog")}>{t.insights}</a>
          <a href={localize(lang, "/contact")}>{t.contact}</a>
          <a href={localize(other, route.page === "notfound" ? "/" : route.path)} {...langProps(other)}>
            {t.langLabel}
          </a>
        </nav>
        <nav className="footerCol" aria-label={t.sisterSites}>
          <h2>{t.sisterSites}</h2>
          <a href="https://cideamarketing.com/">Cidea Marketing</a>
          <a href="https://cidealeads.com/">Cidea Leads</a>
        </nav>
      </div>
      <div className="wrap footerBottom">
        <span suppressHydrationWarning>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{t.location}</span>
      </div>
    </footer>
  );
}
