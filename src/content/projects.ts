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
    id: "hypercube-line-intersection",
    title: "Minimum Line–Hypercube Intersection",
    participation: "Participated",
    description:
      "A collaborative optimization course project on choosing a line through an interior point of an n-dimensional hypercube so that its intersection with the hypercube is as short as possible.",
    technologies: ["Python", "Optimization", "Computational Geometry", "LaTeX"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/moHamiEbad/hypercube-line-intersection-optimization",
      },
      {
        label: "Report",
        href: "https://github.com/moHamiEbad/hypercube-line-intersection-optimization/blob/main/report/hypercube-line-intersection-report.pdf",
      },
    ],
    detail: {
      eyebrow: "Collaborative optimization project",
      summary:
        "A course project I participated in for Introduction to Optimization at Sharif University of Technology. Starting from an interior point of the unit hypercube, we studied which line direction minimizes the length of the segment that remains inside the hypercube, then implemented and tested the resulting ideas numerically.",
      sections: [
        {
          title: "The geometric idea",
          body:
            "Rather than treating every possible direction as an unstructured search, the project uses the hypercube's bounding hyperplanes. By considering pairs of boundary hyperplanes, relevant parts of the problem can be analyzed in the two-dimensional span of their normal vectors, turning some of the high-dimensional geometry into smaller candidate problems.",
        },
        {
          title: "Experiments and extension",
          body:
            "The accompanying Python notebook explores two-, three-, and higher-dimensional cases, including points near the center, faces, and vertices. The report also considers how the same geometric viewpoint can be extended from hypercubes to more general convex polyhedra described by linear inequalities.",
        },
        {
          title: "Collaboration and attribution",
          body:
            "This was not an individual project. The final report is co-authored by Hami Ebadzadeh Semnani and Soroush Shahi, and it acknowledges Kasra Khoshjo for consultation that contributed to an important idea. The linked repository preserves the final PDF, the original LaTeX source, and the implementation and results.",
        },
      ],
    },
  },

    {
    id: "block-transform-coding",
    title: "Block-Based Transform Coding",
    participation: "Participated",
    description:
      "A collaborative academic presentation on transform-based image compression, covering DCT, KLT, coefficient selection, reconstruction error, and compression artifacts.",
    technologies: ["Python", "Image Processing", "DCT / KLT", "LaTeX"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/moHamiEbad/block-transform-coding-presentation",
      },
      {
        label: "Slides",
        href: "https://github.com/moHamiEbad/block-transform-coding-presentation/blob/main/presentation/block-transform-coding-presentation.pdf",
      },
    ],
    detail: {
      eyebrow: "Collaborative academic presentation",
      summary:
        "A presentation I participated in on block-based transform coding for image compression. We studied how image blocks can be represented in different transform bases, how compression arises by retaining only selected coefficients, and why transforms such as the DCT are so useful in practical compression systems.",
      sections: [
        {
          title: "What the presentation explores",
          body:
            "The presentation develops the basic mathematics of block transform coding and reconstruction error, then compares the DCT, KLT, DFT, and Walsh–Hadamard transform. It also discusses energy compaction, block size, blocking artifacts, bit allocation, zonal coding, and threshold coding.",
        },
        {
          title: "Supporting experiments",
          body:
            "Two Python notebooks accompany the presentation. One compares the energy-compaction behavior of KLT, DCT, and DFT on image blocks, while the other compares fixed zonal coefficient selection with adaptive threshold-based selection.",
        },
        {
          title: "Collaboration and attribution",
          body:
            "This was not an individual project. The original presentation lists Hami Ebadzadeh and Mahdi Cheraghzadeh as its authors. The linked repository preserves the final presentation, original LaTeX source, figures, and supporting computational experiments.",
        },
      ],
    },
  },

  {
    id: "lipschitz-continuum-bandits",
    title: "Continuous Lipschitz Bandits",
    participation: "Participated",
    description:
      "A collaborative High-Dimensional Probability project studying regret in continuous multi-armed bandits by combining Lipschitz structure, ε-nets, and UCB1.",
    technologies: [
      "Probability",
      "Multi-Armed Bandits",
      "Regret Analysis",
      "LaTeX",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/moHamiEbad/lipschitz-continuum-bandits",
      },
      {
        label: "Report",
        href: "https://github.com/moHamiEbad/lipschitz-continuum-bandits/blob/main/report/lipschitz-continuum-bandits-report.pdf",
      },
      {
        label: "Slides",
        href: "https://github.com/moHamiEbad/lipschitz-continuum-bandits/blob/main/presentation/lipschitz-continuum-bandits-presentation.pdf",
      },
    ],
    detail: {
      eyebrow: "Collaborative High-Dimensional Probability project",
      summary:
        "A course project I participated in on extending multi-armed bandit ideas from a finite set of actions to a continuous space. Assuming the unknown reward function is Lipschitz, we studied whether the geometry of the action space could be used to obtain a meaningful regret bound.",
      sections: [
        {
          title: "From infinitely many arms to finitely many",
          body:
            "The main approach replaces the continuous action space with a finite ε-net. Lipschitz continuity controls how much reward can be lost by approximating the true optimum with a nearby point in that net, while UCB1 handles exploration and exploitation over the resulting finite set of candidate actions.",
        },
        {
          title: "Balancing approximation and learning",
          body:
            "Making the ε-net finer improves the approximation of the continuous optimum, but also creates more arms for the bandit algorithm to learn. Balancing these two sources of regret leads to a sublinear bound whose dependence on the dimension makes the cost of working in high-dimensional spaces explicit.",
        },
        {
          title: "A second route that did not work",
          body:
            "We also explored whether bounds on the supremum of a Lipschitz sub-Gaussian process could control the regret more directly. The natural construction ran into a structural problem: centering the process removed the dependence on the action variable that the supremum argument needed. We kept this unsuccessful direction in the report because understanding why it failed was part of the project.",
        },
        {
          title: "Collaboration and attribution",
          body:
            "This was not an individual project. The original report and presentation list Hami Ebadzadeh Semnani and Mehdi Darabi as the authors. The linked repository preserves both final artifacts together with their original LaTeX sources.",
        },
      ],
    },
  },

  {
    id: "hbsir-pca",
    title: "HBSIR PCA Explorer",
    participation: "Participated",
    description:
      "A household-expenditure analysis project using PCA to explore relationships among spending variables, with a Streamlit interface that made the workflow accessible to the whole team.",
    technologies: ["Python", "PCA", "Streamlit", "Data Analysis"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/moHamiEbad/hbsir-pca-app",
      },
    ],
    detail: {
      eyebrow: "Team data-analysis project",
      summary:
        "A project I participated in around Iran's Household Budget Survey data. The interesting part was not merely running PCA: it was going from an enormous dataset with no obvious question, to an analysis based on PCA loadings, and then to a Streamlit workflow that teammates could explore without working directly in Python.",
      visualization: "pca-pipeline",
      sections: [
        {
          title: "The analysis",
          body:
            "The workflow can filter household survey data by year, geography, settlement type, and commodity classification; apply different preprocessing choices; and run weighted or unweighted PCA. The outputs include scores, loadings, explained variance, and 2D/3D biplots.",
        },
        {
          title: "Why it matters to me",
          body:
            "This is the same project used in my About story because it captures the kind of work I enjoy: finding the question, learning unfamiliar mathematics when it becomes useful, and then finding a practical way to make the result usable by other people.",
        },
      ],
    },
  },
  {
    id: "financial-sentiment-transformer",
    title: "Financial Sentiment Transformer",
    participation: "Participated",
    description:
      "A team machine-learning project building a Transformer-based classifier from scratch in PyTorch for negative, neutral, and positive financial sentiment.",
    technologies: ["Python", "PyTorch", "Transformers", "NLP"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mbehrad1432-lgtm/financial-sentiment-transformer",
      },
    ],
    detail: {
      eyebrow: "Team machine-learning project",
      summary:
        "A machine-learning project I participated in that implements the Transformer encoder itself rather than using a pretrained encoder such as BERT. BERT is used only for tokenization; the classifier is trained for three-way financial sentiment.",
      visualization: "transformer-pipeline",
      sections: [
        {
          title: "Architecture",
          body:
            "Tokenized sentences pass through trainable 300-dimensional embeddings initialized from GloVe, sinusoidal positional encoding, three Transformer encoder blocks with six attention heads, masked mean pooling, and finally an MLP classifier.",
        },
        {
          title: "Training and evaluation",
          body:
            "The training setup includes label smoothing, weighted sampling for class imbalance, an embedding freeze-to-unfreeze schedule, validation-based checkpoint selection, and evaluation with accuracy, precision, recall, macro F1, weighted F1, and a confusion matrix.",
        },
      ],
    },
  },
  {
    id: "download-manager",
    title: "Go Download Manager",
    participation: "Participated",
    description:
      "A team-built terminal download manager in Go with multipart downloads, queues, bandwidth control, and a responsive TUI.",
    technologies: ["Go", "Concurrency", "HTTP", "TUI"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/computer-technology-team/download-manager",
      },
    ],
    detail: {
      eyebrow: "Team Go project",
      summary:
        "A Go project I participated in that combines network I/O, concurrency, queue management, bandwidth control, and a terminal UI in one system.",
      visualization: "download-manager-pipeline",
      sections: [
        {
          title: "Concurrent downloading",
          body:
            "When a server supports HTTP range requests, a file can be divided into chunks and downloaded in parallel using goroutines. The chunks are written to the correct offsets and assembled into the final file.",
        },
        {
          title: "System structure",
          body:
            "The project separates the terminal UI, queue manager, download engine, bandwidth limiter, and event system. Bubble Tea powers the TUI, while Go channels and asynchronous events help the components communicate without tightly coupling the interface to download execution.",
        },
      ],
    },
  },
];
