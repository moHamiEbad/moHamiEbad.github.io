import { knowledgeEntries } from "../../content/knowledge";
import { createSectionHeading } from "../../components/section-heading/section-heading";
import "./knowledge.css";

export function createKnowledgeSection(): HTMLElement {
  const section = document.createElement("section");
  section.id = "knowledge";
  section.className = "content-section knowledge";

  section.append(
    createSectionHeading(
      "Selected knowledge",
      "Subjects worth mentioning.",
      "A small set of courses and technical areas that shaped how I think, even when they are not projects in their own right.",
    ),
  );

  const grid = document.createElement("div");
  grid.className = "knowledge__grid";

  for (const entry of knowledgeEntries) {
    const article = document.createElement("article");
    article.id = `knowledge-${entry.id}`;
    article.className = "knowledge-card";

    const kind = document.createElement("p");
    kind.className = "knowledge-card__kind";
    kind.textContent = entry.kind;

    const title = document.createElement("h3");
    title.textContent = entry.title;

    const summary = document.createElement("p");
    summary.className = "knowledge-card__summary";
    summary.textContent = entry.summary;

    article.append(kind, title, summary);

    if (entry.insight) {
      const insight = document.createElement("div");
      insight.className = "knowledge-card__insight";

      const label = document.createElement("span");
      label.textContent = "One idea";

      const text = document.createElement("p");
      text.textContent = entry.insight;

      insight.append(label, text);
      article.append(insight);
    }

    if (entry.relatedHref && entry.relatedLabel) {
      const related = document.createElement("a");
      related.className = "knowledge-card__related";
      related.href = entry.relatedHref;
      related.textContent = entry.relatedLabel;
      article.append(related);
    }

    grid.append(article);
  }

  section.append(grid);
  return section;
}
