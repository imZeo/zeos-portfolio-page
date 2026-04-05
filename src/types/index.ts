export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  eyebrow?: string;
  specialty: string;
  summary: string;
  email: string;
  secondaryLinks?: { text: string; href: string }[];
  highlights?: string[];
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  details?: string[];
  linkPreview?: string;
  linkSource?: string;
  linkLabel?: string;
}

export interface AboutProps {
  description: string;
  principles?: {
    title: string;
    items: string[];
  }[];
  image?: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
