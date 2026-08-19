import { siteConfig } from "../../config/site";
import "./navigation.css";

export function createNavigation(): HTMLElement {
  const header = document.createElement("header");
  header.className = "site-header";

  const nav = document.createElement("nav");
  nav.className = "navigation";
  nav.setAttribute("aria-label", "Primary navigation");

  const brand = document.createElement("a");
  brand.className = "navigation__brand";
  brand.href = "#top";
  brand.textContent = siteConfig.shortName;

  const links = document.createElement("div");
  links.className = "navigation__links";

  for (const item of siteConfig.navigation) {
    const anchor = document.createElement("a");
    anchor.href = item.href;
    anchor.textContent = item.label;
    links.append(anchor);
  }

  nav.append(brand, links);
  header.append(nav);

  return header;
}
