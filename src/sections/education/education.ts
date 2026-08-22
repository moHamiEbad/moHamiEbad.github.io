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

    const degree = document.createElement("h3");
    degree.textContent = entry.degree;

    const institution = document.createElement("p");
    institution.textContent = entry.institution;

    article.append(degree, institution);
    list.append(article);
  }

  section.append(list);

  return section;
}