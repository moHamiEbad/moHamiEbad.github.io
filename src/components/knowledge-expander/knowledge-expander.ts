import "./knowledge-expander.css";

export function createKnowledgeExpander(
  title: string,
  content: HTMLElement,
): HTMLDetailsElement {
  const details = document.createElement("details");
  details.className = "knowledge-expander";

  const summary = document.createElement("summary");
  summary.className = "knowledge-expander__summary";

  const titleElement = document.createElement("span");
  titleElement.className = "knowledge-expander__title";
  titleElement.textContent = title;

  const icon = document.createElement("span");
  icon.className = "knowledge-expander__icon";
  icon.setAttribute("aria-hidden", "true");

  summary.append(titleElement, icon);

  const body = document.createElement("div");
  body.className = "knowledge-expander__body";
  body.append(content);

  details.append(summary, body);

  return details;
}
