import type { Project } from "../../types/cv";
import "./project-card.css";

export function createProjectCard(
  project: Project,
  onOpen: (project: Project) => void,
): HTMLElement {
  const article = document.createElement("article");
  article.id = `project-${project.id}`;
  article.className = "project-card";

  const openButton = document.createElement("button");
  openButton.type = "button";
  openButton.className = "project-card__open";
  openButton.setAttribute("aria-label", `Open details for ${project.title}`);
  openButton.addEventListener("click", () => onOpen(project));

  if (project.participation) {
    const participation = document.createElement("span");
    participation.className = "project-card__participation";
    participation.textContent = project.participation;
    openButton.append(participation);
  }

  const headingRow = document.createElement("div");
  headingRow.className = "project-card__heading-row";

  const heading = document.createElement("h3");
  heading.textContent = project.title;

  const arrow = document.createElement("span");
  arrow.className = "project-card__arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";

  headingRow.append(heading, arrow);

  const description = document.createElement("p");
  description.className = "project-card__description";
  description.textContent = project.description;

  const technologies = document.createElement("ul");
  technologies.className = "project-card__technologies";

  for (const technology of project.technologies) {
    const item = document.createElement("li");
    item.textContent = technology;
    technologies.append(item);
  }

  const detailHint = document.createElement("span");
  detailHint.className = "project-card__detail-hint";
  detailHint.textContent = "Open project";

  openButton.append(headingRow, description, technologies, detailHint);
  article.append(openButton);

  if (project.links.length > 0) {
    const links = document.createElement("div");
    links.className = "project-card__links";

    for (const link of project.links) {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.textContent = link.label;
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
      links.append(anchor);
    }

    article.append(links);
  }

  return article;
}
