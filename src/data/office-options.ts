import { LocationSlug } from "./site-routes";

export interface OfficeOption {
  slug: LocationSlug;
  label: string;
}

/** The five live YesssWorks offices, shown as "Locality, Building, City". */
export const OFFICE_OPTIONS: OfficeOption[] = [
  { slug: "andheri-at", label: "Andheri, AT, Mumbai" },
  { slug: "andheri-pinnacle", label: "Andheri, Pinnacle Business Park, Mumbai" },
  { slug: "andheri-ackruti", label: "Andheri, Ackruti Softech Park, Mumbai" },
  { slug: "goregaon-271", label: "Goregaon, 271 Business Park, Mumbai" },
  { slug: "mahape-aurum-q6", label: "Mahape, Aurum Q6, Navi Mumbai" },
];

const ALIASES: Partial<Record<string, LocationSlug>> = {
  andheri: "andheri-at",
  "andheri-east": "andheri-at",
  goregaon: "goregaon-271",
  "goregaon-east": "goregaon-271",
  mahape: "mahape-aurum-q6",
  "navi-mumbai": "mahape-aurum-q6",
};

/** Maps any location slug to one of the five real offices. Returns "" when unknown. */
export const resolveOfficeSlug = (slug?: string): LocationSlug | "" => {
  if (!slug) return "";
  if (OFFICE_OPTIONS.some((o) => o.slug === slug)) return slug as LocationSlug;
  return ALIASES[slug] ?? "";
};

export const officeLabel = (slug?: string): string => {
  const resolved = resolveOfficeSlug(slug);
  return OFFICE_OPTIONS.find((o) => o.slug === resolved)?.label ?? "";
};
