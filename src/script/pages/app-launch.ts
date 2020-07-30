import { LitElement, css, html, customElement } from 'lit-element';
import { greeting } from '../locales/en';

@customElement('app-launch')
export class AppLaunch extends LitElement {

  static get styles() {
    return css`
    #main {
        text-align: center;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), url(assets/images/background.svg);
    }

    #greeting {
      position: absolute;
      width: 100%;
      height: 100%;
      
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 60px;
      line-height: 70px;
      
      /* Gray 1 */
      color: #333333; 
    }

    #logo {      
      display: block;
      margin-left: auto;
      margin-right: auto;
      padding-top: 5%;
    }
       
    #launchOption {
      display: inline-block;
      padding: 10px;
      background-color: lightblue;
    }

    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div id="main">
      <h3 id="greeting">${greeting}</h3>
      <app-userdisplay></app-userdisplay>

      <img id="logo" src="assets/images/logo.svg">

      <span class="options">
        <a id="launchOption" href="./launchhost">Host a game</a>
        <a id="launchOption" href="./launchjoin">Join a game</a>
      </span>
      </div>
    `;
  }
}