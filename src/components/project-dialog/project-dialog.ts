import type { Project } from "../../types/cv";
import { createProjectVisualization } from "../project-visualization/project-visualization";
import "./project-dialog.css";

export interface ProjectDialogController {
  element: HTMLDialogElement;
  open: (project: Project) => void;
}

export function createProjectDialog(): ProjectDialogController {
  const dialog = document.createElement("dialog");
  dialog.className = "project-dialog";
  dialog.setAttribute("aria-labelledby", "project-dialog-title");

  const shell = document.createElement("div");
  shell.className = "project-dialog__shell";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "project-dialog__close";
  closeButton.setAttribute("aria-label", "Close project details");
  closeButton.textContent = "Close ×";

  const content = document.createElement("div");
  content.className = "project-dialog__content";

  shell.append(closeButton, content);
  dialog.append(shell);

  const close = () => {
    dialog.close();
  };

  closeButton.addEventListener("click", close);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      close();
    }
  });

  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });

  const open = (project: Project) => {
    content.replaceChildren();

    const eyebrow = document.createElement("p");
    eyebrow.className = "project-dialog__eyebrow";
    eyebrow.textContent = project.detail.eyebrow ?? "Project";

    const heading = document.createElement("h2");
    heading.id = "project-dialog-title";
    heading.textContent = project.title;

    const summary = document.createElement("p");
    summary.className = "project-dialog__summary";
    summary.textContent = project.detail.summary;

    content.append(eyebrow, heading, summary);

    if (project.detail.visualization) {
      const visualization = createProjectVisualization(
        project.detail.visualization,
      );
      content.append(visualization);
    }

    const sections = document.createElement("div");
    sections.className = "project-dialog__sections";

    for (const section of project.detail.sections) {
      const article = document.createElement("section");

      const title = document.createElement("h3");
      title.textContent = section.title;

      const body = document.createElement("p");
      body.textContent = section.body;

      article.append(title, body);
      sections.append(article);
    }

    content.append(sections);

    document.body.classList.add("modal-open");
    dialog.showModal();
  };

  return { element: dialog, open };
}
