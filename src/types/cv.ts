export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  headline: string;
  summary: string;
  location?: string;
  links: Link[];
}

export interface Experience {
  organization: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  description: string;
  highlights: string[];
}

export type ProjectVisualization = "hypercube-line";

export interface ProjectDetailSection {
  title: string;
  body: string;
}

export interface ProjectDetail {
  eyebrow?: string;
  summary: string;
  visualization?: ProjectVisualization;
  sections: ProjectDetailSection[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: Link[];
  detail: ProjectDetail;
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  start: string;
  end: string;
  details?: string[];
}

export interface Skill {
  label: string;
  href?: string;
  linkLabel?: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export interface KnowledgeEntry {
  id: string;
  kind: string;
  title: string;
  summary: string;
  insight?: string;
  relatedHref?: string;
  relatedLabel?: string;
}
