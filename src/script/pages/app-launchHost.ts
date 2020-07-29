import { LitElement, css, html, customElement } from 'lit-element';

import '../components/userdisplay';

@customElement('app-launchhost')
export class AppLaunchHost extends LitElement {

  static get styles() {
    return css`
    #main {
        text-align: center;
    }

    #launchHostOption {
        padding: 10px;
        background-color: green;
    }

    
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div id="main">
      <p>Generated Code: <i>cU$tomc0de</i></p>
      
      <button> Create Calendar invite </button>


      <p> Joined users: </p>
      <app-userdisplay></app-userdisplay>
      <app-userdisplay></app-userdisplay>
      <app-userdisplay></app-userdisplay>

      <a href="./play">Begin Game</a>
      </div>
    `;
  }
}