/**
 * Shared schema.org identifiers, so page-level JSON-LD (articles, FAQ) can
 * point at the site-wide Organization / WebSite / Person nodes by @id instead
 * of repeating them.
 */
export const SITE_URL = "https://ai.kdchang.com";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const AUTHOR_ID = "https://www.kdchang.com/#person";

/** Matches the htmlLang values in docusaurus.config.ts. */
export function inLanguage(locale: string): string {
  return locale === "en" ? "en-US" : "zh-Hant-TW";
}
