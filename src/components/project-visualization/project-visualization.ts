import type { ProjectVisualization } from "../../types/cv";
import "./project-visualization.css";

export function createProjectVisualization(
  visualization: ProjectVisualization,
): HTMLElement {
  switch (visualization) {
    case "hypercube-line":
      return createHypercubeLineVisualization();
  }
}

function createHypercubeLineVisualization(): HTMLElement {
  const figure = document.createElement("figure");
  figure.className = "project-visualization";

  const stage = document.createElement("div");
  stage.className = "project-visualization__stage";
  stage.innerHTML = `
    <svg
      viewBox="0 0 760 420"
      role="img"
      aria-labelledby="hypercube-title hypercube-description"
    >
      <title id="hypercube-title">Line through a point inside a cube</title>
      <desc id="hypercube-description">
        An isometric cube, a point p in its interior, and a candidate line
        passing through that point.
      </desc>

      <g class="cube cube--back">
        <path d="M235 88 L485 88 L590 166 L340 166 Z" />
        <path d="M485 88 L485 300 L590 360 L590 166" />
        <path d="M235 88 L235 300 L340 360 L340 166" />
      </g>

      <g class="cube cube--front">
        <path d="M235 300 L485 300 L590 360 L340 360 Z" />
        <path d="M340 166 L590 166 L590 360 L340 360 Z" />
      </g>

      <line class="candidate-line" x1="166" y1="330" x2="637" y2="112" />
      <circle class="point-halo" cx="405" cy="220" r="15" />
      <circle class="point" cx="405" cy="220" r="7" />

      <text class="point-label" x="421" y="213">p</text>
      <text class="line-label" x="566" y="129">candidate line</text>
    </svg>
  `;

  const caption = document.createElement("figcaption");
  caption.textContent =
    "A 3D sketch for now. Later this can become interactive and respond to the point and direction chosen by the visitor.";

  figure.append(stage, caption);

  return figure;
}
