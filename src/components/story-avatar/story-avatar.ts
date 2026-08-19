import type { AboutAvatarState } from "../../types/about";
import "./story-avatar.css";

export interface StoryAvatarController {
  element: HTMLElement;
  setState: (state: AboutAvatarState, symbol: string) => void;
}

export function createStoryAvatar(): StoryAvatarController {
  const wrapper = document.createElement("div");
  wrapper.className = "story-avatar";
  wrapper.setAttribute("aria-hidden", "true");

  wrapper.innerHTML = `
    <div class="story-avatar__scene">
      <div class="story-avatar__symbol">?</div>

      <div class="story-avatar__person">
        <div class="story-avatar__head">
          <div class="story-avatar__hair"></div>
          <div class="story-avatar__glasses">
            <span></span><i></i><span></span>
          </div>
        </div>

        <div class="story-avatar__neck"></div>
        <div class="story-avatar__body"></div>
        <div class="story-avatar__arm story-avatar__arm--left"></div>
        <div class="story-avatar__arm story-avatar__arm--right"></div>
        <div class="story-avatar__leg story-avatar__leg--left"></div>
        <div class="story-avatar__leg story-avatar__leg--right"></div>
      </div>

      <div class="story-avatar__ground"></div>
    </div>
  `;

  const symbol = wrapper.querySelector<HTMLElement>(".story-avatar__symbol");

  if (!symbol) {
    throw new Error("Could not create story avatar symbol.");
  }

  const symbolElement: HTMLElement = symbol;

  function setState(state: AboutAvatarState, value: string): void {
    wrapper.dataset.state = state;
    symbolElement.textContent = value;
  }

  setState("overwhelmed", "…");

  return { element: wrapper, setState };
}
