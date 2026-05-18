export interface IPublicationLink {
  label: string;
  href: string;
  stars?: number;
  repo?: string;
};

export interface IPublicationEntry {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  type: "C" | "J" | "P" | "T" | "W";
  links: IPublicationLink[];
  tags?: string[];
  logo?: string;
};