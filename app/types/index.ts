export interface Skill {
  _id: string;
  name: string;
  icon: string;
}
export interface Result {
  value: string;
  label: string;
}
export interface Project {
  _id: string;
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
  overview: string;
  features: string[];
  gallery: string[];
  results: Result[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  icon: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  icon: string;
  color: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}
