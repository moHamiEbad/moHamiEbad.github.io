import type { AboutContent } from "../types/about";

export const aboutContent: AboutContent = {
  title: "I like problems that don't arrive fully formed.",

  intro:
    "I am most drawn to open-ended technical problems where the difficult part is not simply implementing a known solution, but first understanding what question is worth asking. I enjoy moving between a real-world problem, the mathematics that gives it structure, and the software that turns an idea into something testable or usable. I am currently trying to become much stronger and more independent in software engineering while keeping that exploratory, mathematical way of working.",

  storyEyebrow: "One project that explains why",
  storyTitle: "A dataset, no question, and a chain of new problems.",
  storyIntro:
    "One of my favorite university projects started with an enormous household dataset and almost no restriction on what we should do with it. What made the project memorable was that solving one problem kept revealing the next one.",

  steps: [
    {
      number: "01",
      title: "First, learn how to even reach the data.",
      body:
        "The dataset contained hundreds of household variables: expenditures, family structure, number of children, and much more. Before analyzing anything, we first had to learn the Python tooling and syntax needed to access and work with it.",
      avatarState: "overwhelmed",
      avatarSymbol: "db",
    },
    {
      number: "02",
      title: "Then came the harder question: what should we ask?",
      body:
        "Once we could access the data, we were free to analyze it however we wanted. That freedom was unexpectedly difficult. We had a huge amount of information, but no obvious research question. The problem became finding the problem.",
      avatarState: "searching",
      avatarSymbol: "?",
    },
    {
      number: "03",
      title: "A clue appeared in a data-analysis book.",
      body:
        "While looking for ideas, I came across the use of PCA loadings to study relationships among variables rather than focusing only on observations. That suggested a direction: perhaps we could study patterns in household expenditures and see which kinds of spending tended to move together.",
      avatarState: "connecting",
      avatarSymbol: "PCA",
    },
    {
      number: "04",
      title: "There was one problem: I didn't know PCA.",
      body:
        "So the next task was to learn it. I studied the idea behind principal component analysis and, in particular, what the loadings were telling us. The mathematics stopped being something separate from the project; it became the thing that made the analysis understandable.",
      avatarState: "learning",
      avatarSymbol: "Σ",
    },
    {
      number: "05",
      title: "Then the bottleneck moved from mathematics to collaboration.",
      body:
        "My teammates were not comfortable programming, so even a useful analysis would be difficult for them to explore directly. We needed a way for the analysis to become accessible without requiring everyone to work inside Python.",
      avatarState: "searching",
      avatarSymbol: "!",
    },
    {
      number: "06",
      title: "That led me to Streamlit.",
      body:
        "I found Streamlit and used it to build a small interface around the workflow: fetching the data, running the PCA, and presenting the results in a form the rest of the team could explore. A programming problem appeared because a collaboration problem needed solving.",
      avatarState: "building",
      avatarSymbol: "</>",
    },
    {
      number: "07",
      title: "The part I enjoyed was the whole chain.",
      body:
        "The project moved from a real dataset, to an unclear question, to a mathematical method, to learning unfamiliar theory, and finally to building a tool that made the result usable by other people. That movement between problem-finding, mathematics, research, and software is the kind of work I enjoy most.",
      avatarState: "reflecting",
      avatarSymbol: "✓",
    },
  ],

  conclusion:
    "That is the common thread I want to keep developing: becoming better at turning ambiguous real-world problems into well-understood technical problems, and becoming increasingly capable of implementing the systems that solve them.",
};
