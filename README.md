# AI 自學補給站 | AI Learning Station

> You don't need to code to get really good at AI.

## SEO / AEO

- **Social cards**: after adding a page or changing a title, run `npm run og`
  and commit `static/img/og/`. It renders a 1200×630 card per page with local
  Chrome (`CHROME_PATH` to override); pages without one use the home card.
- **llms.txt**: `/llms.txt` and `/llms-full.txt` (plus `/en/…`) are generated on every build by
  `plugins/llms-txt.ts`.
- **Structured data**: site-wide Organization / WebSite / Person in
  `src/theme/SiteMetadata`, Article on docs pages in `src/theme/DocItem/Metadata`,
  FAQPage on `/start`. Blog posts use Docusaurus' built-in BlogPosting.
