#!/usr/bin/env node
/**
 * Generates a 1200x630 social card (Open Graph / Twitter) for every page of
 * the built site, using the page's own title and description.
 *
 *   npm run og        # builds the site, generates cards, rebuilds
 *
 * Output: static/img/og/<locale>/<slug>.png plus static/img/og/manifest.json,
 * which src/lib/ogImage.ts reads. The PNGs are committed, so CI (which has no
 * Chrome guarantee) never renders them. Run it again after adding pages or
 * changing titles.
 *
 * Needs Google Chrome; set CHROME_PATH if it is not in the default location.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = path.join(root, "build");
const outDir = path.join(root, "static/img/og");
const iconUrl = `file://${path.join(root, "static/img/icon-512.png")}`;

const CHROME =
  process.env.CHROME_PATH ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const LOCALES = {
  "zh-Hant": {
    dir: buildDir,
    site: "AI 自學補給站",
    sections: { resources: "學習資源", blog: "文章" },
    home: {
      title: "不用程式背景，也能把 AI 用得很好",
      eyebrow: "最溫馨有趣的 AI 自學社群平台",
    },
  },
  en: {
    dir: path.join(buildDir, "en"),
    site: "AI Learning Station",
    sections: { resources: "Resources", blog: "Article" },
    home: {
      title: "Use AI well, no coding background needed",
      eyebrow: "The warmest, most fun AI learning community",
    },
  },
};

/** Listing pages that only repeat other pages; they keep the default card. */
const SKIP = /(^|\/)(tags|authors|archive|page|search|404)(\/|$)/;

function ogSlug(p) {
  const clean = p.replace(/\/+$/, "");
  return clean === "" ? "home" : clean.slice(1).replace(/\//g, "--");
}

function htmlFiles(dir, skipDirs) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory())
      return skipDirs.includes(full) ? [] : htmlFiles(full, skipDirs);
    return e.name.endsWith(".html") ? [full] : [];
  });
}

/** build/foo/bar.html -> /foo/bar, build/foo/index.html -> /foo */
function pagePath(file, dir) {
  const rel = path.relative(dir, file).replace(/\\/g, "/");
  return `/${rel.replace(/(^|\/)index\.html$/, "").replace(/\.html$/, "")}`;
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'");

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function meta(html, attr, name) {
  const m = html.match(
    new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"`),
  );
  return m ? decode(m[1]) : "";
}

function card({ eyebrow, title, description, site, lang }) {
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><style>
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    background: #0e1114;
    color: #e9ebee;
    font-family: -apple-system, "PingFang TC", "Noto Sans TC", "Helvetica Neue", sans-serif;
    padding: 64px 72px;
    display: flex;
    flex-direction: column;
    border-top: 10px solid #4fb8b1;
  }
  .brand { display: flex; align-items: center; gap: 16px; font-size: 28px; font-weight: 600; color: #aab2bb; }
  .brand img { width: 56px; height: 56px; border-radius: 12px; }
  .main { margin-top: auto; margin-bottom: auto; }
  .eyebrow { font-size: 26px; font-weight: 600; color: #4fb8b1; letter-spacing: 0.04em; margin-bottom: 20px; }
  h1 {
    font-size: ${title.length > 60 ? 50 : title.length > 26 ? 56 : 66}px; font-weight: 700; line-height: 1.25; letter-spacing: -0.01em;
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
  }
  p {
    margin-top: 22px; font-size: 27px; line-height: 1.55; color: #aab2bb;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
  }
  .url { font-size: 24px; color: #7a828c; }
</style></head><body>
  <div class="brand"><img src="${iconUrl}" alt="">${escape(site)}</div>
  <div class="main">
    ${eyebrow ? `<div class="eyebrow">${escape(eyebrow)}</div>` : ""}
    <h1>${escape(title)}</h1>
    ${description ? `<p>${escape(description)}</p>` : ""}
  </div>
  <div class="url">ai.kdchang.com</div>
</body></html>`;
}

if (!fs.existsSync(buildDir)) {
  console.error("No build/ directory. Run `npm run build` first.");
  process.exit(1);
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "og-"));
const manifest = {};

for (const [locale, cfg] of Object.entries(LOCALES)) {
  const otherLocaleDirs = Object.values(LOCALES)
    .map((c) => c.dir)
    .filter((d) => d !== cfg.dir && d.startsWith(cfg.dir));
  const target = path.join(outDir, locale);
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(target, { recursive: true });
  manifest[locale] = [];

  // Page titles are "<page> | <site title>", and the site title may itself
  // contain " | ", so strip it exactly rather than splitting on "|".
  const siteTitle = decode(
    fs
      .readFileSync(path.join(cfg.dir, "index.html"), "utf8")
      .match(/<title[^>]*>([^<]*)<\/title>/)?.[1] ?? "",
  );

  for (const file of htmlFiles(cfg.dir, otherLocaleDirs).sort()) {
    const pagePathname = pagePath(file, cfg.dir);
    if (SKIP.test(pagePathname.slice(1))) continue;

    const html = fs.readFileSync(file, "utf8");
    const slug = ogSlug(pagePathname);
    const section = pagePathname.split("/")[1];
    const fullTitle = decode(html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1] ?? "");
    const description = meta(html, "name", "description");

    let data;
    if (slug === "home") {
      data = { ...cfg.home, description };
    } else {
      const suffix = ` | ${siteTitle}`;
      const title = fullTitle.endsWith(suffix)
        ? fullTitle.slice(0, -suffix.length)
        : fullTitle;
      data = {
        eyebrow: cfg.sections[section] ?? "",
        title,
        description,
      };
    }
    if (!data.title) continue;

    const htmlFile = path.join(tmp, `${locale}-${slug}.html`);
    fs.writeFileSync(
      htmlFile,
      card({ ...data, site: cfg.site, lang: locale }),
    );
    const png = path.join(target, `${slug}.png`);
    execFileSync(
      CHROME,
      [
        "--headless",
        "--disable-gpu",
        "--hide-scrollbars",
        "--force-device-scale-factor=1",
        "--allow-file-access-from-files",
        "--window-size=1200,630",
        `--screenshot=${png}`,
        `file://${htmlFile}`,
      ],
      { stdio: "ignore" },
    );
    manifest[locale].push(slug);
    console.log(`${locale} ${pagePathname} -> ${path.relative(root, png)}`);
  }
}

fs.writeFileSync(
  path.join(outDir, "manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);
fs.rmSync(tmp, { recursive: true, force: true });
console.log(
  `\n${Object.values(manifest).flat().length} cards written. Rebuild to use them.`,
);
