import { knowledgeEntries } from "../../content/knowledge";
import { createSectionHeading } from "../../components/section-heading/section-heading";
import { createJlVisualization } from "../../components/jl-visualization/jl-visualization";
import { createKnowledgeExpander } from "../../components/knowledge-expander/knowledge-expander";
import { createKnowledgeTakeaway } from "../../components/knowledge-takeaway/knowledge-takeaway";
import type { KnowledgeEntry } from "../../types/cv";
import "./knowledge.css";

export function createKnowledgeSection(): HTMLElement {
  const section = document.createElement("section");
  section.id = "knowledge";
  section.className = "content-section knowledge";

  section.append(
    createSectionHeading(
      "Selected knowledge",
      "Advanced subjects worth mentioning.",
      "Selected advanced coursework, each explored through one concrete idea and one broader lesson that stayed with me.",
    ),
  );

  const grid = document.createElement("div");
  grid.className = "knowledge__grid";

  for (const entry of knowledgeEntries) {
    grid.append(createKnowledgeCard(entry));
  }

  section.append(grid);
  return section;
}

function createKnowledgeCard(entry: KnowledgeEntry): HTMLElement {
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

  if (entry.visualization === "jl-projection") {
    const expander = createKnowledgeExpander(
      "A magical application of randomness",
      createJlVisualization(),
    );

    article.append(expander);
  }

  if (entry.takeaway) {
    article.append(
      createKnowledgeTakeaway(entry.takeaway),
    );
  }

  if (entry.relatedHref && entry.relatedLabel) {
    const related = document.createElement("a");
    related.className = "knowledge-card__related";
    related.href = entry.relatedHref;
    related.textContent = entry.relatedLabel;
    article.append(related);
  }

  return article;
}