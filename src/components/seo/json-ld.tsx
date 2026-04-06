import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Organization + WebSite structured data for rich results and knowledge panels.
 */
export function JsonLd() {
  const base = getSiteUrl();
  const url = base.href;

  const organization: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url,
    email: site.email,
    telephone: site.phone,
    description: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
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
    description: site.tagline,
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url,
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
