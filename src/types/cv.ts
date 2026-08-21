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

export type ProjectVisualization =
  | "pca-pipeline"
  | "transformer-pipeline"
  | "download-manager-pipeline";

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
  participation?: string;
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

export interface SkillReference {
  label: string;
  href: string;
}

export interface Skill {
  label: string;
  references?: SkillReference[];
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
  visualization?:
    | "jl-projection"
    | "optimization-hypercube";
  takeaway?: string;
  relatedHref?: string;
  relatedLabel?: string;
}
