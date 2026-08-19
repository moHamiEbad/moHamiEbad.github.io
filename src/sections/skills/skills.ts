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
      "When a skill has concrete evidence elsewhere on the site, it can point directly to the relevant project or knowledge entry.",
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

      if (skill.href) {
        const anchor = document.createElement("a");
        anchor.href = skill.href;
        anchor.textContent = skill.label;
        anchor.title = skill.linkLabel
          ? `Related: ${skill.linkLabel}`
          : "View related work";

        const marker = document.createElement("span");
        marker.setAttribute("aria-hidden", "true");
        marker.textContent = "↗";

        anchor.append(marker);
        item.append(anchor);
      } else {
        item.textContent = skill.label;
      }

      list.append(item);
    }

    article.append(title, list);
    grid.append(article);
  }

  section.append(grid);
  return section;
}
