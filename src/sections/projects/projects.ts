import { projects } from "../../content/projects";
import { createProjectCard } from "../../components/project-card/project-card";
import { createProjectDialog } from "../../components/project-dialog/project-dialog";
import { createSectionHeading } from "../../components/section-heading/section-heading";
import "./projects.css";

export function createProjectsSection(): HTMLElement {
  const section = document.createElement("section");
  section.id = "projects";
  section.className = "content-section projects";

  section.append(
    createSectionHeading(
      "Selected projects",
      "A summary first. Depth on demand.",
    ),
  );

  const grid = document.createElement("div");
  grid.className = "projects__grid";

  const dialog = createProjectDialog();

  for (const project of projects) {
    grid.append(createProjectCard(project, dialog.open));
  }

  section.append(grid, dialog.element);
  return section;
}
