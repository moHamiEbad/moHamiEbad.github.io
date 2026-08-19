import { createNavigation } from "../components/navigation/navigation";
import { createHeroSection } from "../sections/hero/hero";
import { createAboutSection } from "../sections/about/about";
import { createExperienceSection } from "../sections/experience/experience";
import { createProjectsSection } from "../sections/projects/projects";
import { createKnowledgeSection } from "../sections/knowledge/knowledge";
import { createEducationSection } from "../sections/education/education";
import { createSkillsSection } from "../sections/skills/skills";

import "./app.css";

export function createApp(): HTMLElement {
  const page = document.createElement("div");
  page.className = "site-shell";

  const main = document.createElement("main");
  main.className = "site-main";

  main.append(
    createHeroSection(),
    createAboutSection(),
    createExperienceSection(),
    createProjectsSection(),
    createKnowledgeSection(),
    createEducationSection(),
    createSkillsSection(),
  );

  page.append(createNavigation(), main);

  return page;
}
