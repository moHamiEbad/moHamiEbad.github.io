import type { SkillGroup } from "../types/cv";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      {
        label: "TypeScript",
        references: [
          { label: "Task Manager", href: "#project-task-manager" },
        ],
      },
      { label: "JavaScript" },
      {
        label: "Python",
        references: [
          {
            label: "Line–Hypercube Project",
            href: "#project-hypercube-line-intersection",
          },
          {
            label: "Block Transform Coding",
            href: "#project-block-transform-coding",
          },
          { label: "HBSIR PCA", href: "#project-hbsir-pca" },
          {
            label: "Sentiment Transformer",
            href: "#project-financial-sentiment-transformer",
          },
        ],
      },
      {
        label: "Go",
        references: [
          { label: "Download Manager", href: "#project-download-manager" },
        ],
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        label: "Node.js",
        references: [
          { label: "Task Manager", href: "#project-task-manager" },
        ],
      },
      {
        label: "Express",
        references: [
          { label: "Task Manager", href: "#project-task-manager" },
        ],
      },
      {
        label: "MySQL",
        references: [
          { label: "Task Manager", href: "#project-task-manager" },
        ],
      },
    ],
  },
  {
    title: "Data & ML",
    items: [
      {
        label: "PCA",
        references: [
          { label: "HBSIR PCA", href: "#project-hbsir-pca" },
        ],
      },
      {
        label: "Streamlit",
        references: [
          { label: "HBSIR PCA", href: "#project-hbsir-pca" },
        ],
      },
      {
        label: "PyTorch",
        references: [
          {
            label: "Sentiment Transformer",
            href: "#project-financial-sentiment-transformer",
          },
        ],
      },
      {
        label: "Transformers / NLP",
        references: [
          {
            label: "Sentiment Transformer",
            href: "#project-financial-sentiment-transformer",
          },
        ],
      },
    ],
  },
  {
    title: "Engineering",
    items: [
      { label: "Git" },
      { label: "Docker" },
      { label: "Linux" },
      {
        label: "LaTeX",
        references: [
          {
            label: "Line–Hypercube Project",
            href: "#project-hypercube-line-intersection",
          },
          {
            label: "Block Transform Coding",
            href: "#project-block-transform-coding",
          },
        ],
      },
      {
        label: "REST APIs",
        references: [
          { label: "Task Manager", href: "#project-task-manager" },
        ],
      },
      {
        label: "Concurrency",
        references: [
          { label: "Download Manager", href: "#project-download-manager" },
        ],
      },
    ],
  },
  {
    title: "Technical areas",
    items: [
      {
        label: "Optimization",
        references: [
          {
            label: "Line–Hypercube Project",
            href: "#project-hypercube-line-intersection",
          },
          {
            label: "Optimization coursework",
            href: "#knowledge-introduction-to-optimization",
          },
        ],
      },
      {
        label: "Machine Learning",
        references: [
          {
            label: "Sentiment Transformer",
            href: "#project-financial-sentiment-transformer",
          },
        ],
      },
      {
        label: "Data Analysis",
        references: [
          { label: "HBSIR PCA", href: "#project-hbsir-pca" },
        ],
      },
      {
        label: "Image Processing",
        references: [
          {
            label: "Block Transform Coding",
            href: "#project-block-transform-coding",
          },
        ],
      },
      {
        label: "Software Architecture",
        references: [
          { label: "Task Manager", href: "#project-task-manager" },
        ],
      },
    ],
  },
];
