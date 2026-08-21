import { skillGroups } from "../../content/skills";
import { createSectionHeading } from "../../components/section-heading/section-heading";
import "./skills.css";

export function createSkillsSection(): HTMLElement {
  const section = document.createElement("section");
  section.id = "skills";
  section.className = "content-section skills";

  section.append(
    createSectionHeading(
      "Skills",
      "Tools and areas I work with",
      "Where possible, each skill points to a project or course that shows where I used or studied it.",
    ),
  );

  const grid = document.createElement("div");
  grid.className = "skills__grid";

  for (const group of skillGroups) {
    const article = document.createElement("article");
    article.className = "skills__group";

    const title = document.createElement("h3");
    title.textContent = group.title;

    const list = document.createElement("ul");

    for (const skill of group.items) {
      const item = document.createElement("li");
      item.className = "skills__item";

      const label = document.createElement("span");
      label.className = "skills__label";
      label.textContent = skill.label;
      item.append(label);

      if (skill.references && skill.references.length > 0) {
        const references = document.createElement("div");
        references.className = "skills__references";

        for (const reference of skill.references) {
          const anchor = document.createElement("a");
          anchor.href = reference.href;
          anchor.title = `Related: ${reference.label}`;

          const referenceLabel = document.createElement("span");
          referenceLabel.textContent = reference.label;

          const marker = document.createElement("i");
          marker.setAttribute("aria-hidden", "true");
          marker.textContent = "↗";

          anchor.append(referenceLabel, marker);
          references.append(anchor);
        }

        item.append(references);
      }

      list.append(item);
    }

    article.append(title, list);
    grid.append(article);
  }

  section.append(grid);
  return section;
}
