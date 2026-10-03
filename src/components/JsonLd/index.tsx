import type { ReactNode } from "react";
import Head from "@docusaurus/Head";

/** Renders a schema.org JSON-LD block into <head>. */
export default function JsonLd({ data }: { data: object }): ReactNode {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
