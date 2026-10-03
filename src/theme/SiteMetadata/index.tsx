/**
 * Wraps the classic theme's site-wide metadata with:
 * - the site-level JSON-LD graph (Organization, WebSite, Person),
 * - a per-page social card from static/img/og, when one was generated, and
 * - the tagline as a fallback description, for pages Docusaurus leaves
 *   without one (tags, authors, search).
 *
 * All render after the original, so the card overrides themeConfig.image,
 * while a page's own `image` / `description` (rendered deeper) still wins.
 */
import type { ReactNode } from "react";
import SiteMetadata from "@theme-original/SiteMetadata";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { PageMetadata } from "@docusaurus/theme-common";
import JsonLd from "@site/src/components/JsonLd";
import { ogImageFor } from "@site/src/lib/ogImage";
import {
  AUTHOR_ID,
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
  inLanguage,
} from "@site/src/lib/structuredData";

export default function SiteMetadataWrapper(): ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();
  const { pathname } = useLocation();
  const locale = i18n.currentLocale;
  const isEn = locale === "en";
  const homeUrl = useBaseUrl("/", { absolute: true });
  const logoUrl = useBaseUrl("/img/icon-512.png", { absolute: true });
  const searchUrl = useBaseUrl("/search", { absolute: true });

  const path = pathname.startsWith(siteConfig.baseUrl)
    ? `/${pathname.slice(siteConfig.baseUrl.length)}`
    : pathname;
  const card = ogImageFor(locale, path);

  const siteName = isEn ? "AI Learning Station" : "AI 自學補給站";

  return (
    <>
      <SiteMetadata />
      <PageMetadata description={siteConfig.tagline} image={card} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": ORGANIZATION_ID,
              name: siteName,
              alternateName: isEn ? "AI 自學補給站" : "AI Learning Station",
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: logoUrl,
                width: 512,
                height: 512,
              },
              email: "kdchang.ai@gmail.com",
              founder: { "@id": AUTHOR_ID },
            },
            {
              "@type": "WebSite",
              "@id": WEBSITE_ID,
              name: siteName,
              alternateName: isEn ? "AI 自學補給站" : "AI Learning Station",
              url: homeUrl,
              description: siteConfig.tagline,
              inLanguage: inLanguage(locale),
              publisher: { "@id": ORGANIZATION_ID },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${searchUrl}?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Person",
              "@id": AUTHOR_ID,
              name: "KD Chang",
              url: "https://www.kdchang.com",
              image: "https://github.com/kdchang.png",
              sameAs: ["https://github.com/kdchang"],
            },
          ],
        }}
      />
    </>
  );
}
