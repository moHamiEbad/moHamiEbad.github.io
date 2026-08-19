import type { Project } from "../types/cv";

export const projects: Project[] = [
  {
    id: "task-manager",
    title: "Task Manager",
    description:
      "A TypeScript backend project used to explore domain modeling, Clean Architecture, persistence, and HTTP boundaries.",
    technologies: ["TypeScript", "Express", "MySQL", "Clean Architecture"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/moHamiEbad/task-manager",
      },
    ],
    detail: {
      eyebrow: "Software project",
      summary:
        "A backend project that became a practical place to study migration from JavaScript to TypeScript and to make architectural boundaries explicit rather than leaving them implicit in framework code.",
      sections: [
        {
          title: "What makes it interesting",
          body:
            "The useful part is not the task-list feature itself. The project is a small laboratory for domain modeling, application use cases, repository boundaries, authentication, persistence, and the separation between Express and the core application.",
        },
        {
          title: "What can go here later",
          body:
            "Architecture diagrams, selected code paths, migration decisions, trade-offs, tests, and a short explanation of why particular boundaries were introduced.",
        },
      ],
    },
  },

  {
    id: "virtual-warehouse",
    title: "Virtual Warehouse Research",
    description:
      "Research and prototyping around inventory optimization, canonical item mapping, and distributed industrial inventories.",
    technologies: ["Optimization", "Entity Resolution", "Research", "TypeScript"],
    links: [],
    detail: {
      eyebrow: "Research project",
      summary:
        "A multi-part research effort around sharing and coordinating industrial inventories without treating each local warehouse as an isolated system.",
      sections: [
        {
          title: "Research threads",
          body:
            "The work combines preventive inventory methodology, canonical mapping of inconsistent inventory descriptions, and privacy-aware mechanisms for sharing or transferring inventory across organizations.",
        },
        {
          title: "What can go here later",
          body:
            "Interactive pipeline diagrams, mathematical models, selected formulas, presentation material, and concise explanations of the assumptions behind each research component.",
        },
      ],
    },
  },

  {
    id: "hypercube-lines",
    title: "Lines in the Unit Hypercube",
    description:
      "A small geometric research problem about choosing a line through a prescribed point inside the unit hypercube under an extremal length criterion.",
    technologies: ["Geometry", "Linear Algebra", "Optimization", "Research"],
    links: [],
    detail: {
      eyebrow: "Mathematical project",
      summary:
        "This is an example of the kind of project that benefits from a web portfolio: the statement is abstract in one sentence, but becomes intuitive as soon as the geometry is visible.",
      visualization: "hypercube-line",
      sections: [
        {
          title: "The idea",
          body:
            "Start with a prescribed point inside a unit hypercube and consider lines passing through that point. The project studies how the direction of the line affects the portion that remains inside the cube, under an extremal criterion.",
        },
        {
          title: "Why the website helps",
          body:
            "Later this detail view can combine the exact mathematical statement, a derivation, numerical experiments, and an interactive high-dimensional interpretation instead of forcing the whole idea into two résumé lines.",
        },
      ],
    },
  },
];
