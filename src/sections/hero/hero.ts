import { profile } from "../../content/profile";
import { siteConfig } from "../../config/site";
import "./hero.css";

export function createHeroSection(): HTMLElement {
  const section = document.createElement("section");
  section.id = "top";
  section.className = "hero";

  const eyebrow = document.createElement("p");
  eyebrow.className = "hero__eyebrow";
  eyebrow.textContent = "Portfolio / CV";

  const heading = document.createElement("h1");
  heading.textContent = profile.name;

  const headline = document.createElement("p");
  headline.className = "hero__headline";
  headline.textContent = profile.headline;

  const summary = document.createElement("p");
  summary.className = "hero__summary";
  summary.textContent = profile.summary;

  const links = document.createElement("div");
  links.className = "hero__links";

  for (const [index, link] of profile.links.entries()) {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.label;
    anchor.className =
      index === 0 ? "button button--primary" : "button button--secondary";

    if (!link.href.startsWith("mailto:")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }

    links.append(anchor);
  }

  if (siteConfig.cvUrl) {
    const cv = document.createElement("a");
    cv.href = siteConfig.cvUrl;
    cv.textContent = "Download CV";
    cv.className = "button button--secondary";
    cv.target = "_blank";
    cv.rel = "noreferrer";
    links.append(cv);
  }

  const address = document.createElement("p");
  address.className = "hero__address";
  address.textContent = siteConfig.websiteUrl.replace(/^https?:\/\//, "");

  section.append(eyebrow, heading, headline, summary, links, address);
  return section;
}
