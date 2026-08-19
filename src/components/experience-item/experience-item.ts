import type { Experience } from "../../types/cv";
import "./experience-item.css";

export function createExperienceItem(experience: Experience): HTMLElement {
  const article = document.createElement("article");
  article.className = "experience-item";

  const time = document.createElement("div");
  time.className = "experience-item__time";
  time.textContent = `${experience.start} — ${experience.end}`;

  const body = document.createElement("div");

  const heading = document.createElement("h3");
  heading.textContent = experience.role;

  const organization = document.createElement("p");
  organization.className = "experience-item__organization";
  organization.textContent = experience.location
    ? `${experience.organization} · ${experience.location}`
    : experience.organization;

  const description = document.createElement("p");
  description.className = "experience-item__description";
  description.textContent = experience.description;

  body.append(heading, organization, description);

  if (experience.highlights.length > 0) {
    const highlights = document.createElement("ul");

    for (const highlight of experience.highlights) {
      const item = document.createElement("li");
      item.textContent = highlight;
      highlights.append(item);
    }

    body.append(highlights);
  }

  article.append(time, body);
  return article;
}
