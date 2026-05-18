export interface ISiteLinks {
  email: string;
  cv: string;
  github: string;
  scholar: string;
  linkedin?: string;
  dblp?: string;
};

export interface IProjectLinks {
  paper?: string;
  code?: string;
  demo?: string;
  slides?: string;
  zhihu?: string;
};

export interface IProject {
  title: string;
  description: string;
  tags: string[];
  links: IProjectLinks;
  cover?: string;
};

export interface IPublicationLinks {
  pdf?: string;
  arxiv?: string;
  doi?: string;
  code?: string;
};

export interface IPublication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  links: IPublicationLinks;
  cover?: string;
  tags?: string[];
};

export interface IEducationItem {
  school: string;
  degree: string;
  period: string;
  details?: string;
  highlights?: { label: string; url?: string }[];
  logo?: string;
};

export interface IExperienceItem {
  role: string;
  organization: string;
  period: string;
  details?: string;
  highlights?: { label: string; url?: string }[];
  logo?: string;
};

export interface ITeachingItem {
  role: string;
  institution: string;
  courses: string[];
};

export interface ISiteConfig {
  name: string;
  siteName: string;
  tagline: string;
  bio: string;
  siteUrl?: string;
  avatar?: string;
  lastUpdated: string;
  sourceUrl?: string;
  location: string;
  infoHubUrl?: string;
  links: ISiteLinks;
  featuredProjects: IProject[];
  selectedPublications: IPublication[];
  resume?: {
    education: IEducationItem[];
    experience: IExperienceItem[];
    academicService: string[];
    teaching: ITeachingItem[];
  };
};