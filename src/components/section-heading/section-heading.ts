import "./section-heading.css";

export function createSectionHeading(
  eyebrow: string,
  title: string,
  description?: string,
): HTMLElement {
  const wrapper = document.createElement("header");
  wrapper.className = "section-heading";

  const eyebrowElement = document.createElement("p");
  eyebrowElement.className = "section-heading__eyebrow";
  eyebrowElement.textContent = eyebrow;

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  wrapper.append(eyebrowElement, titleElement);

  if (description) {
    const descriptionElement = document.createElement("p");
    descriptionElement.className = "section-heading__description";
    descriptionElement.textContent = description;
    wrapper.append(descriptionElement);
  }

  return wrapper;
}
