import { LitElement, css, html, customElement } from 'lit-element';


@customElement('app-launchjoin')
export class AppLaunchJoin extends LitElement {

  static get styles() {
    return css`
    #main {
        text-align: center;
    } 
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div id="main">
      <p>Enter game code:</p>
      <form action="./play">
        <input type="text" id="gamecode" name="gamecode">
        <input type="submit" value="Submit">
      </form>
      </div>
    `;
  }
}