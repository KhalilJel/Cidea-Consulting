# Cidea Consulting — Grove AI-inspired redesign (October 2026)

## Reference

Refero style: **Grove AI** — https://styles.refero.design/style/7f7d3ff7-7a74-40f1-9098-a946ce53d4d4
(“clinical journal in morning light — a single green word anchors a page of measured prose”).

Principles carried over:

- Clinical authority through restraint: one accent colour, generous whitespace, left-aligned body copy capped around 520px.
- Serif display headlines (Libre Caslon Text) with one accent phrase in italic, as in Grove's “Meet *Grace*”; Geist for all UI and body text, Geist Mono for small data labels.
- Top announcement strip, outlined announcement pill above the headline, filled + outlined pill button pair.
- A floating “product” card beside the hero headline (here: an example AI opportunity map, labelled as an illustration).
- Cards with 20px radius (24px for large panels) and hairline halos instead of heavy shadows.
- Small-caps section labels; the “proof point” pattern (label → icon → large number → caption), used for real engagement prices.
- One tinted section per page.

Adapted (not copied):

- **Dark instead of light.** Grove is a white page. The agreed Consulting palette is deep navy, so the same hierarchy is applied on navy with blue-grey cards.
- **Mint fills the primary button.** Grove reserves green for text and icons, but the brief assigns mint to calls to action. Navy on mint has 10:1 contrast.
- **No testimonials, logos, statistics or photography.** These would have to be invented. The proof points are the actual engagement prices from `docs/commercial-offer.md`, plus stated working principles.

## Palette

| Role | Token | Hex |
| --- | --- | --- |
| Primary background | `--navy` | #071521 |
| Secondary background | `--slate` | #122A3A |
| Primary accent | `--mint` | #42D6B2 |
| Light text | `--text` | #F3F7FA |
| Secondary accent | `--steel` | #8CA5B8 |

Supporting shades: `--navy-2` #0B1D2C (tinted section), `--slate-2` #17344A (card hover), `--text-soft` #D3DEE6 (long-form text), `--mint-hover` #66E0C3, `--error` #FF9D8C (form errors only).
Steel on navy is 7.2:1 and steel on slate is 5.8:1.

## Architecture

Same foundation as Cidea Marketing:
- Norwegian at `/…` and English at `/en/…`.
- Every route prerendered with its own canonical and hreflang tags, plus a generated sitemap.
- A real 404 page.
- Full markdown articles in both languages.
- A validated `mailto:` enquiry form. It does not post to a server.
- Pinned dependencies and a lockfile.

## Preserved

- **URLs:** `/ai-opportunity`, `/ai-opportunity-reports`, `/ai-business-workshops`, `/ai-implementation`, `/ai-agent-systems`, `/blog`, `/blog/<slug>`.
- **Contact:** the production contact address.
- **Content:** the prices and the “never recommend AI because it's fashionable” rule from `docs/commercial-offer.md`.
- **From open PR #6:** the English translations and responsive navigation. Its visual refresh is superseded.
