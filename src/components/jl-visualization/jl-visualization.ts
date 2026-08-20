import "./jl-visualization.css";

export function createJlVisualization(): HTMLElement {
  const wrapper = document.createElement("div");
  wrapper.className = "jl";

  wrapper.append(
    createObjectivePanel(),
    createRandomMatrixPanel(),
    createGuaranteePanel(),
  );

  return wrapper;
}

function createObjectivePanel(): HTMLElement {
  const section = document.createElement("section");
  section.className = "jl__section";

  section.innerHTML = `
    <div class="jl__section-heading">
      <span class="jl__step">01</span>
      <div>
        <p class="jl__eyebrow">The objective</p>
        <h4>Keep the geometry, throw away dimensions.</h4>
        <p>
          Suppose we have a finite collection of points living in
          <strong>ℝ¹⁰⁰⁰⁰</strong>. We want to map them into a much smaller
          space <strong>ℝᵐ</strong> while keeping every pairwise distance
          approximately unchanged.
        </p>
      </div>
    </div>

    <div class="jl-objective">
      <figure class="jl-space">
        <figcaption>
          <span>Original space</span>
          <strong>ℝ¹⁰⁰⁰⁰</strong>
          <small>schematic 2D view</small>
        </figcaption>

        <svg viewBox="0 0 430 280" role="img"
          aria-label="Schematic of four points in the original high-dimensional space">
          <line class="jl-distance jl-distance--original"
            x1="96" y1="190" x2="312" y2="92" />
          <circle class="jl-point" cx="96" cy="190" r="8" />
          <circle class="jl-point" cx="312" cy="92" r="8" />
          <circle class="jl-point jl-point--muted" cx="177" cy="72" r="6" />
          <circle class="jl-point jl-point--muted" cx="338" cy="211" r="6" />

          <text x="76" y="217">xᵢ</text>
          <text x="320" y="82">xⱼ</text>
          <text class="jl-distance-label" x="188" y="126">d = 5.00</text>
        </svg>
      </figure>

      <div class="jl-map-arrow" aria-hidden="true">
        <span>f(x) = Ax</span>
        <b>→</b>
      </div>

      <figure class="jl-space jl-space--target">
        <figcaption>
          <span>Lower-dimensional space</span>
          <strong>ℝᵐ</strong>
          <small>same finite point set</small>
        </figcaption>

        <svg viewBox="0 0 430 280" role="img"
          aria-label="Schematic of the same four points after dimensionality reduction">
          <line class="jl-distance jl-distance--mapped"
            x1="102" y1="185" x2="304" y2="96" />
          <circle class="jl-point" cx="102" cy="185" r="8" />
          <circle class="jl-point" cx="304" cy="96" r="8" />
          <circle class="jl-point jl-point--muted" cx="184" cy="76" r="6" />
          <circle class="jl-point jl-point--muted" cx="331" cy="204" r="6" />

          <text x="70" y="213">f(xᵢ)</text>
          <text x="312" y="84">f(xⱼ)</text>
          <text class="jl-distance-label" x="185" y="128">d' = 4.8282</text>
        </svg>
      </figure>
    </div>

    <div class="jl-distance-rule">
      <div>
        <span>Take ε = 0.1</span>
        <strong>5.00 → 4.82</strong>
      </div>

      <p>
        Because the original distance is <strong>d = 5</strong>, a 10%
        distortion allows the mapped distance to lie between
        <strong>4.5 and 5.5</strong>.
      </p>

      <code>
        (1 − ε)d ≤ d' ≤ (1 + ε)d
      </code>
    </div>
  `;

  return section;
}

function createRandomMatrixPanel(): HTMLElement {
  const section = document.createElement("section");
  section.className = "jl__section";

  section.innerHTML = `
    <div class="jl__section-heading">
      <span class="jl__step">02</span>
      <div>
        <p class="jl__eyebrow">The random map</p>
        <h4>A matrix can be the dimension-reduction machine.</h4>
        <p>
          To map a vector from <strong>ℝ¹⁰⁰⁰⁰</strong> to
          <strong>ℝᵐ</strong>, use an <strong>m × 100000</strong> matrix.
          Multiplication turns each 100,000-dimensional vector into an
          m-dimensional one.
        </p>
      </div>
    </div>

    <div class="jl-matrix-story">
      <div class="jl-random-matrix">
        <span class="jl-random-matrix__label">A</span>
        <div class="jl-random-matrix__grid">
          ${[
      1, -1, 1, 1, -1, -1, 1, -1,
      -1, 1, -1, 1, 1, -1, -1, 1,
      1, 1, -1, -1, 1, 1, -1, -1,
      -1, -1, 1, -1, 1, -1, 1, 1,
      1, -1, -1, 1, -1, 1, 1, -1,
    ].map(v => `<b data-sign="${v > 0 ? "plus" : "minus"}">${v > 0 ? "+1" : "−1"}</b>`).join("")}
        </div>
        <small>m × 100,000</small>
      </div>

      <div class="jl-times">×</div>

      <div class="jl-vector">
        <span>input</span>
        <strong>x</strong>
        <small>100,000 coordinates</small>
        <div class="jl-vector__bars">
          ${Array.from({ length: 12 }, (_, i) =>
      `<i style="height:${24 + ((i * 17) % 55)}px"></i>`).join("")}
        </div>
      </div>

      <div class="jl-equals">=</div>

      <div class="jl-vector jl-vector--small">
        <span>output</span>
        <strong>Ax</strong>
        <small>m coordinates</small>
        <div class="jl-vector__bars">
          ${Array.from({ length: 7 }, (_, i) =>
        `<i style="height:${30 + ((i * 23) % 48)}px"></i>`).join("")}
        </div>
      </div>
    </div>

    <div class="jl-coins">
      <div class="jl-coins__visual">
        <div class="jl-coin">
          <span>HEADS</span>
          <strong>+1</strong>
        </div>
        <div class="jl-coin">
          <span>TAILS</span>
          <strong>−1</strong>
        </div>
      </div>

      <div class="jl-coins__copy">
        <p class="jl__eyebrow">An example of a discrete random matrix</p>
        <h5>Imagine flipping a fair coin for every matrix entry.</h5>
        <p>
          Heads gives <strong>+1</strong>, tails gives <strong>−1</strong>
          (followed by the appropriate scaling). This is called a
          <strong>Rademacher random matrix</strong>.
        </p>
        <p>
          A very common JL construction instead uses Gaussian entries:
        </p>
        <code>Aᵢⱼ ~ Normal(0, 1/m)</code>
      </div>
    </div>
  `;

  return section;
}

function createGuaranteePanel(): HTMLElement {
  const section = document.createElement("section");
  section.className = "jl__section jl__section--final";

  section.innerHTML = `
    <div class="jl__section-heading">
      <span class="jl__step">03</span>
      <div>
        <p class="jl__eyebrow">The Johnson–Lindenstrauss surprise</p>
        <h4>How small can m be?</h4>
        <p>
          For <strong>N</strong> points, there exists a random linear map
          that preserves all pairwise distances up to distortion ε once
          the target dimension is on the order of
        </p>
      </div>
    </div>

    <div class="jl-bound">
      <div class="jl-bound__formula">
        <span>target dimension</span>
        <strong>m = O( log N / ε² )</strong>
      </div>

      <div class="jl-bound__parts">
        <article>
          <span>ε = 0.1</span>
          <strong>1 / ε² = 100</strong>
          <p>
            Asking for only 10% distortion contributes a factor of 100.
          </p>
        </article>

        <article>
          <span>N points</span>
          <strong>log N</strong>
          <p>
            More points require more dimensions, but only logarithmically.
          </p>
        </article>

        <article class="jl-bound__magic">
          <span>original dimension</span>
          <strong>100,000</strong>
          <p>
            Notice what is missing from the bound:
            the original ambient dimension.
          </p>
        </article>
      </div>
    </div>

    <div class="jl-final-message">
      <span>For ε = 0.1</span>
      <strong>m ≈ C · 100 · log N</strong>
      <p>
        The exact constant <strong>C</strong> depends on the theorem
        formulation and random construction. The important structural claim
        is that a suitable Gaussian (or Rademacher) random matrix can reduce
        dimension dramatically while preserving the geometry of a finite
        point cloud.
      </p>
    </div>
  `;

  return section;
}
