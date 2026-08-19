import type { SkillGroup } from "../types/cv";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      {
        label: "TypeScript",
        href: "#project-task-manager",
        linkLabel: "Task Manager",
      },
      { label: "JavaScript" },
      { label: "Python" },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        label: "Node.js",
        href: "#project-task-manager",
        linkLabel: "Task Manager",
      },
      {
        label: "Express",
        href: "#project-task-manager",
        linkLabel: "Task Manager",
      },
      {
        label: "MySQL",
        href: "#project-task-manager",
        linkLabel: "Task Manager",
      },
    ],
  },
  {
    title: "Engineering",
    items: [
      { label: "Git" },
      { label: "Docker" },
      { label: "Linux" },
      { label: "REST APIs", href: "#project-task-manager", linkLabel: "Task Manager" },
    ],
  },
  {
    title: "Technical interests",
    items: [
      {
        label: "Optimization",
        href: "#project-virtual-warehouse",
        linkLabel: "Virtual Warehouse",
      },
      {
        label: "Machine Learning",
        href: "#knowledge-high-dimensional-probability",
        linkLabel: "High-Dimensional Probability",
      },
      {
        label: "Algorithms",
        href: "#project-hypercube-lines",
        linkLabel: "Hypercube project",
      },
      {
        label: "Software Architecture",
        href: "#project-task-manager",
        linkLabel: "Task Manager",
      },
    ],
  },
];
