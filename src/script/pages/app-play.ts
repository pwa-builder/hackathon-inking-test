import { LitElement, css, html, customElement } from 'lit-element';


@customElement('app-play')
export class AppPlay extends LitElement {

  static get styles() {
    return css`
    #main {
        text-align: center;
    }

    #inking {
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div id="main">
      <p>Play</p>

      <inking-canvas id="inking" name="myInkingCanvas">
        <inking-toolbar canvas="myInkingCanvas"></inking-toolbar>
      </inking-canvas>
      
      </div>
    `;
  }
}