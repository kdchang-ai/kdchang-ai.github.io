/**
 * Adds Article JSON-LD to every docs page. Docusaurus already emits a
 * BreadcrumbList for docs, but nothing describing the page itself.
 */
import type { ReactNode } from "react";
import Metadata from "@theme-original/DocItem/Metadata";
import type MetadataType from "@theme/DocItem/Metadata";
import type { WrapperProps } from "@docusaurus/types";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import JsonLd from "@site/src/components/JsonLd";
import { ogImageFor } from "@site/src/lib/ogImage";
import {
  AUTHOR_ID,
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
  inLanguage,
} from "@site/src/lib/structuredData";

type Props = WrapperProps<typeof MetadataType>;

export default function MetadataWrapper(props: Props): ReactNode {
  const { metadata, frontMatter, assets } = useDoc();
  const { siteConfig, i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;

  const path = `/${metadata.permalink.slice(siteConfig.baseUrl.length)}`;
  const image = useBaseUrl(
    assets.image ??
      frontMatter.image ??
      ogImageFor(locale, path) ??
      (siteConfig.themeConfig.image as string),
    { absolute: true },
  );

  return (
    <>
      <Metadata {...props} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${SITE_URL}${metadata.permalink}#article`,
          headline: metadata.title,
          description: metadata.description,
          url: `${SITE_URL}${metadata.permalink}`,
          mainEntityOfPage: `${SITE_URL}${metadata.permalink}`,
          inLanguage: inLanguage(locale),
          image,
          ...(frontMatter.keywords && {
            keywords: frontMatter.keywords.join(", "),
          }),
          ...(metadata.lastUpdatedAt && {
            dateModified: new Date(metadata.lastUpdatedAt).toISOString(),
          }),
          author: { "@id": AUTHOR_ID },
          publisher: { "@id": ORGANIZATION_ID },
          isPartOf: { "@id": WEBSITE_ID },
        }}
      />
    </>
  );
}
