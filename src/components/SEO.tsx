import { Helmet } from "react-helmet-async";
import { SITE } from "@/data/locations";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  image?: string;
  noindex?: boolean;
}

export const SEO = ({ title, description, canonical, keywords, jsonLd, image, noindex }: SEOProps) => {
  const fullTitle = title.length > 60 ? title.slice(0, 57) + "..." : title;
  const fullDesc = description.length > 160 ? description.slice(0, 157) + "..." : description;
  const url = canonical ? (canonical.startsWith("http") ? canonical : `${SITE.domain}${canonical}`) : undefined;
  const ldArr = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      {image && <meta name="twitter:image" content={image} />}
      {ldArr.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};
