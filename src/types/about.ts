export type AboutAvatarState =
  | "overwhelmed"
  | "searching"
  | "learning"
  | "connecting"
  | "building"
  | "reflecting";

export interface AboutStoryStep {
  number: string;
  title: string;
  body: string;
  avatarState: AboutAvatarState;
  avatarSymbol: string;
}

export interface AboutContent {
  title: string;
  intro: string;
  storyEyebrow: string;
  storyTitle: string;
  storyIntro: string;
  steps: AboutStoryStep[];
  conclusion: string;
}
