import { education } from "../../content/education";
import { createSectionHeading } from "../../components/section-heading/section-heading";
import "./education.css";

export function createEducationSection(): HTMLElement {
  const section = document.createElement("section");
  section.id = "education";
  section.className = "content-section education";

  section.append(
    createSectionHeading(
      "Education",
      "Academic background",
    ),
  );

  const list = document.createElement("div");
  list.className = "education__list";

  for (const entry of education) {
    const article = document.createElement("article");
    article.className = "education__item";

    const years = document.createElement("p");
    years.className = "education__years";
    years.textContent = `${entry.start} — ${entry.end}`;

    const body = document.createElement("div");

    const degree = document.createElement("h3");
    degree.textContent = entry.field
      ? `${entry.degree}, ${entry.field}`
      : entry.degree;

    const institution = document.createElement("p");
    institution.textContent = entry.institution;

    body.append(degree, institution);
    article.append(years, body);
    list.append(article);
  }

  section.append(list);
  return section;
}
