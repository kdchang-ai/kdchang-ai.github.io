/**
 * Generates /llms.txt (an index of the site for LLMs, see https://llmstxt.org)
 * and /llms-full.txt (every resource page and blog post as plain markdown).
 *
 * Written per locale: /llms.txt (Chinese) and /en/llms.txt (English).
 */
import fs from "node:fs/promises";
import path from "node:path";
import type { LoadContext, Plugin } from "@docusaurus/types";

type Entry = {
  title: string;
  description: string;
  url: string;
  source: string;
  date?: string;
};

/** Per-locale wording. PAGES are React pages, so they have no markdown source. */
const TEXT = {
  "zh-Hant": {
    intro:
      "專為沒有技術背景的人整理的 AI 自學平台（繁體中文）：AI 基礎觀念、工具選擇、提示詞、職場應用、工作流自動化與 Vibe Coding。",
    fullLabel: "全站內容的完整 markdown 版本",
    fullTitle: "全文",
    pagesHeading: "主要頁面",
    docsHeading: "學習資源",
    postsHeading: "最新文章",
    otherLocale: { label: "English version", path: "/en/" },
    privacy: "隱私權政策",
    pages: [
      {
        title: "新手起步",
        path: "/start",
        description: "零技術背景的 20 分鐘五步驟入門，附新手常見問題。",
      },
      {
        title: "學習地圖",
        path: "/roadmap",
        description:
          "從 AI 基礎觀念、工具、提示詞、職場應用到工作流與 Vibe Coding 的學習順序。",
      },
      {
        title: "關於本站",
        path: "/about",
        description: "AI 自學補給站的定位、內容原則與聯絡方式。",
      },
    ],
  },
  en: {
    intro:
      "A self-study AI site for people with no technical background: AI basics, choosing tools, prompts, AI at work, workflow automation and Vibe Coding.",
    fullLabel: "Full content of the site as markdown",
    fullTitle: "Full text",
    pagesHeading: "Main pages",
    docsHeading: "Resources",
    postsHeading: "Latest articles",
    otherLocale: { label: "繁體中文版", path: "/" },
    privacy: "Privacy Policy",
    pages: [
      {
        title: "Get Started",
        path: "/start",
        description:
          "A five-step, 20-minute start for people with no technical background, plus a beginner FAQ.",
      },
      {
        title: "Roadmap",
        path: "/roadmap",
        description:
          "The order to learn in: AI basics, tools, prompts, AI at work, workflows and Vibe Coding.",
      },
      {
        title: "About",
        path: "/about",
        description:
          "What AI Learning Station is, its content principles, and how to get in touch.",
      },
    ],
  },
};

/**
 * Strips Docusaurus-only syntax, and makes links absolute so they still work
 * outside the site: "/start" -> site URL, "./foo.md" -> that page's URL.
 */
function toMarkdown(
  raw: string,
  sourceFile: string,
  siteUrl: string,
  urlBySource: Map<string, string>,
): string {
  return (
    raw
      // front matter
      .replace(/^---\n[\s\S]*?\n---\n/, "")
      // MDX imports / exports
      .replace(/^(import|export) .*$/gm, "")
      .replace(/^<!-- truncate -->$/gm, "")
      // :::tip Title  ->  **Title**   (closing ::: removed)
      .replace(/^:::\w+[ \t]*(.*)$/gm, (_, title: string) =>
        title ? `**${title.trim()}**` : "",
      )
      .replace(/^:::$/gm, "")
      .replace(/\]\(([^)\s]+)\)/g, (match, href: string) => {
        if (href.startsWith("/")) return `](${siteUrl}${href})`;
        const [file, hash] = href.split("#");
        if (/^\.{0,2}\/?[^:]*\.mdx?$/.test(file)) {
          const url = urlBySource.get(
            path.resolve(path.dirname(sourceFile), file),
          );
          if (url) return `](${url}${hash ? `#${hash}` : ""})`;
        }
        return match;
      })
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
}

export default function llmsTxtPlugin(context: LoadContext): Plugin {
  const { siteConfig, siteDir, i18n } = context;
  let docs: Entry[] = [];
  let posts: Entry[] = [];

  const resolveSource = (source: string) =>
    path.join(siteDir, source.replace(/^@site\//, ""));

  return {
    name: "llms-txt",

    async allContentLoaded({ allContent }) {
      const docsContent = allContent["docusaurus-plugin-content-docs"]
        ?.default as {
        loadedVersions: {
          docs: {
            title: string;
            description: string;
            permalink: string;
            source: string;
          }[];
        }[];
      };
      const blogContent = allContent["docusaurus-plugin-content-blog"]
        ?.default as {
        blogPosts: {
          metadata: {
            title: string;
            description: string;
            permalink: string;
            source: string;
            date: string | Date;
          };
        }[];
      };

      docs = (docsContent?.loadedVersions[0]?.docs ?? [])
        .map((d) => ({
          title: d.title,
          description: d.description,
          url: siteConfig.url + d.permalink,
          source: d.source,
        }))
        .sort((a, b) => a.url.localeCompare(b.url));

      posts = (blogContent?.blogPosts ?? []).map(({ metadata: m }) => ({
        title: m.title,
        description: m.description,
        url: siteConfig.url + m.permalink,
        source: m.source,
        date: new Date(m.date).toISOString().slice(0, 10),
      }));
    },

    async postBuild({ outDir }) {
      const text = TEXT[i18n.currentLocale as keyof typeof TEXT] ?? TEXT.en;
      // Site URL including the locale prefix, e.g. https://ai.kdchang.com/en
      const localeUrl = siteConfig.url + siteConfig.baseUrl.replace(/\/$/, "");

      const link = (e: { title: string; url: string; description: string }) =>
        `- [${e.title}](${e.url})${e.description ? `: ${e.description}` : ""}`;

      const index = [
        `# AI 自學補給站 | AI Learning Station`,
        "",
        `> ${siteConfig.tagline}`,
        "",
        text.intro,
        `${text.fullLabel}: ${localeUrl}/llms-full.txt`,
        "",
        `## ${text.pagesHeading}`,
        "",
        ...text.pages.map((p) => link({ ...p, url: localeUrl + p.path })),
        "",
        `## ${text.docsHeading}`,
        "",
        ...docs.map(link),
        "",
        `## ${text.postsHeading}`,
        "",
        ...posts.map((p) => link({ ...p, title: `${p.title} (${p.date})` })),
        "",
        "## Optional",
        "",
        `- [${text.privacy}](${localeUrl}/privacy)`,
        `- [${text.otherLocale.label}](${siteConfig.url}${text.otherLocale.path}llms.txt)`,
        `- [RSS](${localeUrl}/blog/rss.xml)`,
        "",
      ].join("\n");

      const entries = [...docs, ...posts];
      const urlBySource = new Map(
        entries.map((e) => [resolveSource(e.source), e.url]),
      );

      const sections = await Promise.all(
        entries.map(async (e) => {
          const file = resolveSource(e.source);
          const raw = await fs.readFile(file, "utf8");
          return [
            `# ${e.title}`,
            "",
            `URL: ${e.url}`,
            ...(e.date ? [`Date: ${e.date}`] : []),
            ...(e.description ? [`Description: ${e.description}`] : []),
            "",
            toMarkdown(raw, file, localeUrl, urlBySource)
              // the page's own H1 duplicates the title above
              .replace(/^# .*\n+/, ""),
          ].join("\n");
        }),
      );

      const full = [
        `# AI 自學補給站 | AI Learning Station — ${text.fullTitle}`,
        "",
        `> ${siteConfig.tagline}`,
        "",
        ...sections.flatMap((s) => ["---", "", s, ""]),
      ].join("\n");

      await fs.writeFile(path.join(outDir, "llms.txt"), index);
      await fs.writeFile(path.join(outDir, "llms-full.txt"), full);
    },
  };
}
