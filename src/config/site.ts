export const siteConfig = {
  name: "Hami Ebadzadeh",
  shortName: "Hami Ebadzadeh",

  title: "Hami Ebadzadeh — Portfolio",
  description:
    "Portfolio, projects, selected technical work, and CV of Hami Ebadzadeh.",

  websiteUrl: "https://mohamiebad.github.io/",
  githubUrl: "https://github.com/moHamiEbad",

  email: "hamiebad79@gmail.com",
  phone: "+98 912 297 9399",       // replace with your real number
  phoneHref: "tel:+989122979399",  // same number, no spaces

  // Leave empty until cv.pdf exists. The hero hides the button automatically.
  cvUrl: "/Hami-Ebadzadeh-CV.pdf",

  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Knowledge", href: "#knowledge" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
  ],
} as const;
