import { siteConfig } from "../config/site";
import type { Profile } from "../types/cv";

export const profile: Profile = {
  name: siteConfig.name,
  headline: "Computer Science · Software Engineering · Applied Research",
  summary:
    "I build software, study technical systems, and enjoy turning ambiguous problems into clear, implementable solutions.",
  links: [
    {
      label: "GitHub",
      href: siteConfig.githubUrl,
    },
    {
      label: "Email",
      href: `mailto:${siteConfig.email}`,
    },
  ],
};
