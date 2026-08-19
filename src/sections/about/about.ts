import { aboutContent } from "../../content/about";
import { createSectionHeading } from "../../components/section-heading/section-heading";
import { createStoryAvatar } from "../../components/story-avatar/story-avatar";
import type { AboutStoryStep } from "../../types/about";
import "./about.css";

export function createAboutSection(): HTMLElement {
  const section = document.createElement("section");
  section.id = "about";
  section.className = "content-section about";

  section.append(createSectionHeading("About", aboutContent.title));

  const intro = document.createElement("p");
  intro.className = "about__intro";
  intro.textContent = aboutContent.intro;

  const story = document.createElement("div");
  story.className = "about-story";

  const storyHeader = document.createElement("header");
  storyHeader.className = "about-story__header";

  const eyebrow = document.createElement("p");
  eyebrow.className = "about-story__eyebrow";
  eyebrow.textContent = aboutContent.storyEyebrow;

  const title = document.createElement("h3");
  title.textContent = aboutContent.storyTitle;

  const storyIntro = document.createElement("p");
  storyIntro.textContent = aboutContent.storyIntro;

  storyHeader.append(eyebrow, title, storyIntro);

  const layout = document.createElement("div");
  layout.className = "about-story__layout";

  const visualColumn = document.createElement("aside");
  visualColumn.className = "about-story__visual";

  const avatar = createStoryAvatar();

  const currentStep = document.createElement("p");
  currentStep.className = "about-story__current-step";
  currentStep.textContent = `Step ${aboutContent.steps[0]?.number ?? "01"}`;

  visualColumn.append(avatar.element, currentStep);

  const steps = document.createElement("div");
  steps.className = "about-story__steps";

  const stepElements: HTMLElement[] = [];

  for (const step of aboutContent.steps) {
    const element = createStoryStep(step);
    steps.append(element);
    stepElements.push(element);
  }

  layout.append(visualColumn, steps);

  const conclusion = document.createElement("p");
  conclusion.className = "about-story__conclusion";
  conclusion.textContent = aboutContent.conclusion;

  story.append(storyHeader, layout, conclusion);
  section.append(intro, story);

  observeStorySteps(stepElements, avatar, currentStep);

  return section;
}

function createStoryStep(step: AboutStoryStep): HTMLElement {
  const article = document.createElement("article");
  article.className = "about-story__step";
  article.dataset.avatarState = step.avatarState;
  article.dataset.avatarSymbol = step.avatarSymbol;
  article.dataset.stepNumber = step.number;

  const number = document.createElement("span");
  number.className = "about-story__step-number";
  number.textContent = step.number;

  const content = document.createElement("div");

  const title = document.createElement("h4");
  title.textContent = step.title;

  const body = document.createElement("p");
  body.textContent = step.body;

  content.append(title, body);
  article.append(number, content);

  return article;
}

function observeStorySteps(
  steps: HTMLElement[],
  avatar: ReturnType<typeof createStoryAvatar>,
  currentStep: HTMLElement,
): void {
  if (!("IntersectionObserver" in window)) {
    steps[0]?.classList.add("is-active");
    return;
  }

  steps[0]?.classList.add("is-active");

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      const element = visible.target as HTMLElement;

      for (const step of steps) {
        step.classList.toggle("is-active", step === element);
      }

      const state = element.dataset.avatarState;
      const symbol = element.dataset.avatarSymbol;
      const stepNumber = element.dataset.stepNumber;

      if (state && symbol && isAvatarState(state)) {
        avatar.setState(state, symbol);
      }

      if (stepNumber) {
        currentStep.textContent = `Step ${stepNumber}`;
      }
    },
    {
      root: null,
      rootMargin: "-28% 0px -45% 0px",
      threshold: [0.15, 0.35, 0.55],
    },
  );

  for (const step of steps) {
    observer.observe(step);
  }
}

function isAvatarState(
  value: string,
): value is AboutStoryStep["avatarState"] {
  return [
    "overwhelmed",
    "searching",
    "learning",
    "connecting",
    "building",
    "reflecting",
  ].includes(value);
}
