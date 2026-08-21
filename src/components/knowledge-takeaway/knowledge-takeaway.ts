import "./knowledge-takeaway.css";

export function createKnowledgeTakeaway(
  text: string,
): HTMLElement {
  const aside = document.createElement("aside");
  aside.className = "knowledge-takeaway";

  const mark = document.createElement("div");
  mark.className = "knowledge-takeaway__mark";
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = "✦";

  const content = document.createElement("div");

  const label = document.createElement("p");
  label.className = "knowledge-takeaway__label";
  label.textContent = "Takeaway";

  const body = document.createElement("p");
  body.className = "knowledge-takeaway__body";
  body.textContent = text;

  content.append(label, body);
  aside.append(mark, content);

  return aside;
}