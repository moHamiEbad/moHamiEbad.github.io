import type { KnowledgeEntry } from "../types/cv";

export const knowledgeEntries: KnowledgeEntry[] = [
  {
    id: "high-dimensional-probability",
    kind: "Coursework",
    title: "High-Dimensional Probability",
    summary:
      "An advanced course about probability and geometry in high-dimensional spaces: concentration of measure, random vectors and matrices, and the surprising ways randomness can preserve useful structure.",
    visualization: "jl-projection",
    takeaway:
      "Some of the best ideas begin with an approach that initially seems like nobody would think to try.",
  },
  {
    id: "introduction-to-optimization",
    kind: "Coursework",
    title: "Introduction to Optimization",
    summary:
      "A broader introduction to optimization than my earlier Operations Research course: beyond linear programs, we worked with unconstrained and constrained problems and with linear and nonlinear objectives and constraints. I did not leave as an expert in every method, but I left with a much better map of the field — enough to recognize the structure of a new optimization problem and know where to start looking.",
    visualization: "optimization-hypercube",
    takeaway:
      "When the usual methods work, use them. But sometimes a little thinking outside the box — and squeezing every last drop of insight from the assumptions — can lead to a much better solution.",
  },
];
