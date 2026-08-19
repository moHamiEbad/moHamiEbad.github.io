export const siteConfig = {
  name: "Hami Ebadzadeh",
  shortName: "Hami Ebadzadeh",

  title: "Hami Ebadzadeh — Portfolio",
  description:
    "Portfolio, projects, selected technical work, and CV of Hami Ebadzadeh.",

  websiteUrl: "https://mohamiebad.github.io/",
  githubUrl: "https://github.com/moHamiEbad",

  // Change this once and every email link that uses the config will follow it.
  email: "YOUR_EMAIL@example.com",

  // Leave empty until cv.pdf exists. The hero hides the button automatically.
  cvUrl: "",

  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Knowledge", href: "#knowledge" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
  ],
} as const;
