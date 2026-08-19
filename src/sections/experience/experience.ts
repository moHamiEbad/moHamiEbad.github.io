import { experiences } from "../../content/experience";
import { createExperienceItem } from "../../components/experience-item/experience-item";
import { createSectionHeading } from "../../components/section-heading/section-heading";
import "./experience.css";

export function createExperienceSection(): HTMLElement {
  const section = document.createElement("section");
  section.id = "experience";
  section.className = "content-section experience";

  section.append(
    createSectionHeading(
      "Experience",
      "Work and collaboration",
      "Placeholder content for now. We should write this from your actual experience after the main information architecture is settled.",
    ),
  );

  const list = document.createElement("div");
  list.className = "experience__list";

  for (const experience of experiences) {
    list.append(createExperienceItem(experience));
  }

  section.append(list);
  return section;
}
