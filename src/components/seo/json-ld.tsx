import { site } from "@/data/site";
import { getSiteUrl, toAbsoluteUrl } from "@/lib/site-url";

/**
 * Organization + WebSite structured data for rich results and knowledge panels.
 */
export function JsonLd() {
  const base = getSiteUrl();
  const url = base.href;
  const logoUrl = toAbsoluteUrl("/opengraph-image");

  const organization: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: `${site.name}, ${site.shortName}`,
    url,
    email: site.email,
    telephone: site.phone,
    description: site.tagline,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  if (site.socialSameAs.length > 0) {
    organization.sameAs = [...site.socialSameAs];
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url,
    inLanguage: "en-IN",
    description: site.tagline,
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url,
      logo: { "@type": "ImageObject", url: logoUrl },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

type BlogPostingJsonLdProps = {
  title: string;
  description: string;
  datePublished: string;
  url: string;
  imageUrl?: string;
  authorName?: string;
};

export function BlogPostingJsonLd({
  title,
  description,
  datePublished,
  url,
  imageUrl,
  authorName = site.name,
}: BlogPostingJsonLdProps) {
  const base = getSiteUrl().href;
  const logoUrl = toAbsoluteUrl("/opengraph-image");

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: base,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: base,
      logo: { "@type": "ImageObject", url: logoUrl },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  if (imageUrl) {
    data.image = [imageUrl];
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

type ProjectJsonLdProps = {
  name: string;
  description: string;
  url: string;
  location: string;
  imageUrl?: string;
};

export function ProjectJsonLd({ name, description, url, location, imageUrl }: ProjectJsonLdProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url,
    about: {
      "@type": "Place",
      name: location,
    },
  };

  if (imageUrl) {
    data.image = imageUrl;
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
