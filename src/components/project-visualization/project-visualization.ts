import type { ProjectVisualization } from "../../types/cv";
import "./project-visualization.css";

export function createProjectVisualization(
  visualization: ProjectVisualization,
): HTMLElement {
  switch (visualization) {
    case "pca-pipeline":
      return createPcaPipeline();

    case "transformer-pipeline":
      return createTransformerPipeline();

    case "download-manager-pipeline":
      return createDownloadManagerPipeline();
  }
}

function createPcaPipeline(): HTMLElement {
  const figure = document.createElement("figure");
  figure.className = "project-visualization project-visualization--pca";

  figure.innerHTML = `
    <div class="project-flow">
      <div class="project-flow__node">
        <span>01 · Survey data</span>
        <strong>Households × expenditures</strong>
        <div class="mini-table" aria-hidden="true">
          <i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i>
        </div>
      </div>

      <b class="project-flow__arrow">→</b>

      <div class="project-flow__node">
        <span>02 · Prepare</span>
        <strong>Filter + preprocess</strong>
        <small>year · area · shares · CLR · log</small>
      </div>

      <b class="project-flow__arrow">→</b>

      <div class="project-flow__node project-flow__node--accent">
        <span>03 · PCA</span>
        <strong>Scores + loadings</strong>
        <div class="mini-pca" aria-hidden="true">
          <i style="left:18%;top:62%"></i>
          <i style="left:32%;top:48%"></i>
          <i style="left:47%;top:56%"></i>
          <i style="left:61%;top:31%"></i>
          <i style="left:77%;top:40%"></i>
          <em></em>
        </div>
      </div>

      <b class="project-flow__arrow">→</b>

      <div class="project-flow__node">
        <span>04 · Explore</span>
        <strong>Streamlit UI</strong>
        <small>plots · biplots · saved outputs</small>
      </div>
    </div>

    <figcaption>
      The workflow turned a large survey dataset into something the team could
      iteratively filter, analyze, and inspect rather than a one-off notebook.
    </figcaption>
  `;

  return figure;
}

function createTransformerPipeline(): HTMLElement {
  const figure = document.createElement("figure");
  figure.className = "project-visualization project-visualization--transformer";

  figure.innerHTML = `
    <div class="transformer-flow">
      <div class="transformer-flow__input">
        <span>Financial sentence</span>
        <strong>“Earnings exceeded expectations.”</strong>
      </div>

      <b>↓</b>

      <div class="transformer-flow__row">
        <div class="project-flow__node">
          <span>Tokenize</span>
          <strong>BERT WordPiece</strong>
          <small>tokenizer only</small>
        </div>

        <b class="project-flow__arrow">→</b>

        <div class="project-flow__node">
          <span>Represent</span>
          <strong>GloVe + position</strong>
          <small>300-dimensional embeddings</small>
        </div>

        <b class="project-flow__arrow">→</b>

        <div class="project-flow__node project-flow__node--accent">
          <span>Reason</span>
          <strong>Transformer × 3</strong>
          <small>6-head self-attention + FFN</small>
        </div>

        <b class="project-flow__arrow">→</b>

        <div class="project-flow__node">
          <span>Classify</span>
          <strong>Mean pool + MLP</strong>
          <small>3 logits</small>
        </div>
      </div>

      <b>↓</b>

      <div class="sentiment-output">
        <span>negative</span>
        <span>neutral</span>
        <span class="sentiment-output__active">positive</span>
      </div>
    </div>

    <figcaption>
      The encoder is implemented in PyTorch rather than replaced by a pretrained
      BERT encoder; BERT contributes the tokenizer, not the model itself.
    </figcaption>
  `;

  return figure;
}

function createDownloadManagerPipeline(): HTMLElement {
  const figure = document.createElement("figure");
  figure.className = "project-visualization project-visualization--download";

  figure.innerHTML = `
    <div class="download-flow">
      <div class="project-flow__node download-flow__url">
        <span>Request</span>
        <strong>URL</strong>
        <small>HEAD → range support?</small>
      </div>

      <b class="project-flow__arrow">→</b>

      <div class="project-flow__node">
        <span>Coordinate</span>
        <strong>Queue manager</strong>
        <small>priority · pause · resume</small>
      </div>

      <b class="project-flow__arrow">→</b>

      <div class="download-chunks">
        <span>Parallel chunks</span>
        <div>
          <i>0–24%</i>
          <i>25–49%</i>
          <i>50–74%</i>
          <i>75–100%</i>
        </div>
        <small>goroutines + HTTP Range</small>
      </div>

      <b class="project-flow__arrow">→</b>

      <div class="project-flow__node project-flow__node--accent">
        <span>Write</span>
        <strong>Final file</strong>
        <small>synchronized offsets</small>
      </div>
    </div>

    <div class="download-support">
      <span>Bandwidth limiter</span>
      <span>Events</span>
      <span>Bubble Tea TUI</span>
      <span>Progress + errors</span>
    </div>

    <figcaption>
      Download execution, queue state, bandwidth control, and the terminal UI
      are separated so concurrent work can happen without freezing the interface.
    </figcaption>
  `;

  return figure;
}
