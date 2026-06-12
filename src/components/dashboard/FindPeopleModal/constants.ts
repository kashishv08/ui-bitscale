import type { FilterItem } from '../../../types';

export const FILTERS: FilterItem[] = [
  { label: "Job Title",         placeholder: "E.g: Manager, Software Engineer" },
  { label: "Company Website",   placeholder: "Eg: Google.com, LinkedIn.com" },
  { label: "Person Location",   placeholder: "Eg: London, Great New York City" },
  { label: "Company Location",  placeholder: "E.g: United States, UAE" },
  { label: "Company Headcount", placeholder: "E.g: 11-50, 10000+" },
  { label: "Management Level",  placeholder: "E.g: Owner, Founder" },
];

export const TABLE_COLUMNS = [
  "NAME", "TITLE", "HEADLINE", "LINKEDIN URL", "COMPANY", "COMPANY URL", "COMPANY...",
];
