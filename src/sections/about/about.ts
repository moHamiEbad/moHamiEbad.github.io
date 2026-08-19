import { createSectionHeading } from "../../components/section-heading/section-heading";
import "./about.css";

export function createAboutSection(): HTMLElement {
  const section = document.createElement("section");
  section.id = "about";
  section.className = "content-section about";

  section.append(
    createSectionHeading(
      "About",
      "A little context beyond the résumé.",
    ),
  );

  const body = document.createElement("div");
  body.className = "about__body";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "This section is intentionally still a placeholder. Once the overall structure feels right, it should become a short professional introduction rather than a second version of the hero text.";

  body.append(paragraph);
  section.append(body);

  return section;
}
