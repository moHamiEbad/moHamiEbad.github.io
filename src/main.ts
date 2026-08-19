import "./styles/reset.css";
import "./styles/tokens.css";
import "./styles/typography.css";
import "./styles/global.css";

import { createApp } from "./app/app";
import { siteConfig } from "./config/site";

document.title = siteConfig.title;

const description = document.querySelector<HTMLMetaElement>(
  'meta[name="description"]',
);

if (description) {
  description.content = siteConfig.description;
}

const root = document.querySelector<HTMLDivElement>("#app");

if (!root) {
  throw new Error("Could not find #app root element.");
}

root.append(createApp());
