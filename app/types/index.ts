export interface Skill {
  name: string;
  icon: string;
}
export interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  overview: string;
  objective: string;
  features: string[];
  skills: string[];
  gallery: string[];
  results: { value: string; label: string }[];
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
