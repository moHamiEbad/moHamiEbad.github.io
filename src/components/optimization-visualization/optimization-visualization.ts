import "./optimization-visualization.css";

export function createOptimizationVisualization(): HTMLElement {
  const wrapper = document.createElement("div");
  wrapper.className = "opt-viz";
  wrapper.append(
    createBreadthStep(),
    createFirstAttemptStep(),
    createFacePairStep(),
    createReductionStep(),
  );
  return wrapper;
}

function createBreadthStep(): HTMLElement {
  const section = document.createElement("section");
  section.className = "opt-viz__step";
  section.innerHTML = `
    <header class="opt-viz__heading">
      <span class="opt-viz__number">01</span>
      <div>
        <p class="opt-viz__eyebrow">A broader map</p>
        <h4>Optimization is much bigger than linear programming.</h4>
        <p>
          My Operations Research course was centered mainly on linear
          objectives and linear constraints. This course exposed me to a
          broader landscape: unconstrained and constrained problems, and
          linear and nonlinear objectives and constraints.
        </p>
      </div>
    </header>

    <div class="opt-landscape">
      <div class="opt-landscape__axes">
        <span class="opt-landscape__y-label">Constraints</span>
        <span class="opt-landscape__x-label">Objective / model</span>
        <div class="opt-landscape__grid">
          <article><small>Unconstrained</small><strong>Linear</strong></article>
          <article><small>Unconstrained</small><strong>Nonlinear</strong></article>
          <article class="opt-landscape__or">
            <small>Constrained</small><strong>Linear</strong>
            <span>Operations Research lived mostly here</span>
          </article>
          <article class="opt-landscape__new">
            <small>Constrained</small><strong>Nonlinear</strong>
            <span>A much larger toolbox becomes relevant</span>
          </article>
        </div>
      </div>

      <aside class="opt-landscape__note">
        <span>What I actually gained</span>
        <p>
          Not deep mastery of every method, but a map of the territory:
          when I meet a new optimization problem, I have a better idea of
          what structure to identify and where to start looking.
        </p>
      </aside>
    </div>
  `;
  return section;
}

function createFirstAttemptStep(): HTMLElement {
  const section = document.createElement("section");
  section.className = "opt-viz__step";
  section.innerHTML = `
    <header class="opt-viz__heading">
      <span class="opt-viz__number">02</span>
      <div>
        <p class="opt-viz__eyebrow">My first approach</p>
        <h4>Optimize directly over the direction of the line.</h4>
        <p>
          Given a point <strong>p</strong> inside the unit hypercube, I wanted
          the direction whose line has the shortest intersection with the cube.
          My first instinct was to define an objective <strong>L(u)</strong>:
          give it a direction <strong>u</strong>, and it returns the length of
          the segment cut out by the cube.
        </p>
      </div>
    </header>

    <div class="opt-first-attempt">
      <figure class="opt-cube opt-cube--directions">
        <figcaption>Search over directions <small>Schematic 3D view</small></figcaption>
        <svg viewBox="0 0 520 360" role="img" aria-label="Cube with an interior point and several candidate lines through it">
          <g class="opt-cube__wire">
            <path d="M135 88 L355 88 L440 150 L220 150 Z" />
            <path d="M135 88 L135 270 L220 326 L220 150" />
            <path d="M355 88 L355 270 L440 326 L440 150" />
            <path d="M135 270 L355 270 L440 326 L220 326 Z" />
          </g>
          <circle class="opt-point" cx="282" cy="204" r="8" />
          <text class="opt-label" x="296" y="196">p</text>
          <line class="opt-direction opt-direction--muted" x1="120" y1="238" x2="444" y2="168" />
          <line class="opt-direction opt-direction--muted" x1="187" y1="103" x2="377" y2="306" />
          <line class="opt-direction opt-direction--active" x1="182" y1="300" x2="397" y2="92" />
          <text class="opt-label opt-label--accent" x="372" y="114">u</text>
        </svg>
      </figure>

      <div class="opt-first-attempt__math">
        <span>First formulation</span>
        <code>min L(u)</code>
        <p>where the line is <strong>p + t u</strong>.</p>
        <div class="opt-direction-space">
          <span>direction space</span>
          <svg viewBox="0 0 250 180" role="img" aria-label="Circle representing possible normalized directions">
            <circle class="opt-direction-space__circle" cx="125" cy="90" r="64" />
            <circle class="opt-direction-space__center" cx="125" cy="90" r="4" />
            <line class="opt-direction-space__ray" x1="125" y1="90" x2="176" y2="51" />
            <path class="opt-direction-space__gradient" d="M65 122 C76 144 102 157 128 154" />
            <path class="opt-direction-space__arrow" d="M122 148 L130 154 L121 160" />
            <text x="180" y="48">u</text>
            <text x="48" y="151">search</text>
          </svg>
        </div>
        <p class="opt-first-attempt__failure">
          It looked like a generic numerical-optimization problem. I tried to
          attack it that way — and got nowhere useful.
        </p>
      </div>
    </div>
  `;
  return section;
}

function createFacePairStep(): HTMLElement {
  const section = document.createElement("section");
  section.className = "opt-viz__step";
  section.innerHTML = `
    <header class="opt-viz__heading">
      <span class="opt-viz__number">03</span>
      <div>
        <p class="opt-viz__eyebrow">The café observation</p>
        <h4>Stop searching over all directions. Choose the two faces first.</h4>
        <p>
          While I was explaining the problem to a friend, he pointed out a
          geometric fact: a line through an interior point exits the cube at
          two boundary faces. So instead of optimizing blindly over directions,
          we could solve the problem for each pair of faces and then take the
          best result.
        </p>
      </div>
    </header>

    <div class="opt-face-pair">
      <figure class="opt-face-pair__figure">
        <figcaption>Fix one pair of boundary faces</figcaption>
        <svg viewBox="0 0 520 350" role="img" aria-label="Cube with two selected faces and a line through an interior point hitting them">
          <g class="opt-face-pair__faces">
            <path class="opt-face-pair__face opt-face-pair__face--left" d="M128 93 L212 151 L212 317 L128 263 Z" />
            <path class="opt-face-pair__face opt-face-pair__face--right" d="M352 93 L438 151 L438 317 L352 263 Z" />
          </g>
          <g class="opt-cube__wire">
            <path d="M128 93 L352 93 L438 151 L212 151 Z" />
            <path d="M128 93 L128 263 L212 317 L212 151" />
            <path d="M352 93 L352 263 L438 317 L438 151" />
            <path d="M128 263 L352 263 L438 317 L212 317 Z" />
          </g>
          <line class="opt-face-pair__line" x1="157" y1="200" x2="405" y2="214" />
          <circle class="opt-face-pair__hit" cx="157" cy="200" r="7" />
          <circle class="opt-face-pair__hit" cx="405" cy="214" r="7" />
          <circle class="opt-point" cx="282" cy="207" r="8" />
          <text class="opt-label" x="291" y="197">p</text>
          <text class="opt-label opt-label--accent" x="126" y="185">Fᵢ</text>
          <text class="opt-label opt-label--accent" x="416" y="199">Fⱼ</text>
        </svg>
      </figure>

      <div class="opt-face-pair__process">
        <div class="opt-process-node"><span>1</span><p>Choose a pair of faces</p><strong>(Fᵢ, Fⱼ)</strong></div>
        <div class="opt-process-arrow">→</div>
        <div class="opt-process-node"><span>2</span><p>Solve only that geometric subproblem</p><strong>Lᵢⱼ*</strong></div>
        <div class="opt-process-arrow">→</div>
        <div class="opt-process-node opt-process-node--accent"><span>3</span><p>Take the smallest over all pairs</p><strong>minᵢⱼ Lᵢⱼ*</strong></div>
      </div>
    </div>
  `;
  return section;
}

function createReductionStep(): HTMLElement {
  const section = document.createElement("section");
  section.className = "opt-viz__step opt-viz__step--final";
  section.innerHTML = `
    <header class="opt-viz__heading">
      <span class="opt-viz__number">04</span>
      <div>
        <p class="opt-viz__eyebrow">Use the geometry harder</p>
        <h4>The n-dimensional problem collapses to one angle.</h4>
        <p>
          For a fixed pair of faces, we could show that an optimal direction
          lies in the 2D plane generated by the two relevant coordinate
          directions. Once inside that plane, the direction can be represented
          by a single angle <strong>θ</strong>.
        </p>
      </div>
    </header>

    <div class="opt-reduction">
      <div class="opt-reduction__stage">
        <div class="opt-reduction__label"><span>Original problem</span><strong>n dimensions</strong></div>
        <svg viewBox="0 0 360 260" role="img" aria-label="Schematic high-dimensional cube represented by a wireframe cube">
          <g class="opt-cube__wire">
            <path d="M80 55 L230 55 L292 101 L142 101 Z" />
            <path d="M80 55 L80 181 L142 221 L142 101" />
            <path d="M230 55 L230 181 L292 221 L292 101" />
            <path d="M80 181 L230 181 L292 221 L142 221 Z" />
          </g>
          <circle class="opt-point" cx="185" cy="139" r="7" />
          <text class="opt-label" x="196" y="131">p</text>
        </svg>
      </div>

      <div class="opt-reduction__arrow"><span>fix Fᵢ, Fⱼ</span><b>→</b></div>

      <div class="opt-reduction__stage">
        <div class="opt-reduction__label"><span>Relevant subspace</span><strong>2D plane</strong></div>
        <svg viewBox="0 0 360 260" role="img" aria-label="Two-dimensional plane with point p and candidate direction">
          <rect class="opt-plane" x="59" y="45" width="242" height="167" rx="12" />
          <circle class="opt-point" cx="180" cy="130" r="7" />
          <line class="opt-plane__axis" x1="85" y1="130" x2="278" y2="130" />
          <line class="opt-plane__axis" x1="180" y1="190" x2="180" y2="70" />
          <line class="opt-plane__direction" x1="180" y1="130" x2="256" y2="84" />
          <path class="opt-plane__angle" d="M220 130 A40 40 0 0 0 214 108" />
          <text class="opt-label" x="190" y="121">p</text>
          <text class="opt-label opt-label--accent" x="223" y="119">θ</text>
        </svg>
      </div>

      <div class="opt-reduction__arrow"><span>parameterize direction</span><b>→</b></div>

      <div class="opt-reduction__stage opt-reduction__stage--one-d">
        <div class="opt-reduction__label"><span>Final search</span><strong>1 variable: θ</strong></div>
        <svg viewBox="0 0 360 260" role="img" aria-label="One-dimensional objective curve over angle theta">
          <line class="opt-one-d__axis" x1="54" y1="205" x2="315" y2="205" />
          <line class="opt-one-d__axis" x1="54" y1="205" x2="54" y2="48" />
          <path class="opt-one-d__curve" d="M64 86 C105 101 122 142 150 173 C174 198 196 187 218 151 C244 108 268 82 306 72" />
          <circle class="opt-one-d__minimum" cx="183" cy="187" r="7" />
          <line class="opt-one-d__guide" x1="183" y1="187" x2="183" y2="205" />
          <text class="opt-label" x="174" y="228">θ*</text>
          <text class="opt-label" x="23" y="61">L</text>
          <text class="opt-label opt-label--accent" x="194" y="177">minimum</text>
        </svg>
      </div>
    </div>

    <div class="opt-reduction__result">
      <span>What changed?</span>
      <strong>n-dimensional direction search → face pair → plane → angle</strong>
      <p>
        The breakthrough was not a more powerful optimizer. It was extracting
        enough geometry from the assumptions that the optimization problem
        itself became dramatically simpler.
      </p>
    </div>
  `;
  return section;
}
