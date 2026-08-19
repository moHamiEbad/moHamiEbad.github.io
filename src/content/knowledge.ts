import type { KnowledgeEntry } from "../types/cv";

export const knowledgeEntries: KnowledgeEntry[] = [
  {
    id: "high-dimensional-probability",
    kind: "Coursework",
    title: "High-Dimensional Probability",
    summary:
      "Concentration phenomena, random matrices, random projections, and the geometry that appears when dimension itself becomes part of the problem.",
    insight:
      "Johnson–Lindenstrauss in one line: for a finite set of points, a suitably chosen random projection can reduce the ambient dimension to roughly O(ε⁻² log n) while approximately preserving all pairwise distances.",
  },
];
