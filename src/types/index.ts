/**
 * Purpose: Shared TypeScript interfaces for portfolio data.
 */

/** Where a skill or project was exercised: production network, home lab, or coursework. */
export type Env = 'prod' | 'lab' | 'academic';

export type Category = 'network' | 'security' | 'cloud' | 'infra' | 'software';

export interface Profile {
  fullName: string;
  handle: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  photoUrl: string;
  cvUrl: string;
  summary: string;
  about: string[];
  seeking: string;
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface SkillItem {
  name: string;
  env: Env;
}

export interface SkillDomain {
  id: string;
  category: Category;
  title: string;
  icon: string;
  command: string;
  summary: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  env: Env;
  context: string;
  period: string;
  status: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links?: { label: string; url: string; icon: string }[];
}

export interface LogEntry {
  tag: string;
  text: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  log: LogEntry[];
}

export interface Credential {
  name: string;
  issuer: string;
  status: 'earned' | 'in-progress' | 'hands-on';
  date: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
  /** Grade chips, e.g. "ICT · C" */
  results?: string[];
}

export interface Degree {
  degree: string;
  institution: string;
  period: string;
  status: string;
  specialisation: string;
  modules: { code: string; name: string; network?: boolean }[];
  research: {
    title: string;
    code: string;
    status: string;
    summary: string;
    links: { label: string; url: string; icon: string }[];
  };
}

export interface Activity {
  title: string;
  organization: string;
  period: string;
}
