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
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }
       
    .options {
      margin: 0;
      position: absolute;
      top: 85%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }

    #launchOptionHost:hover {
      background-image: url('assets/images/button_host_pressed.svg');
    }

    #launchOptionJoin:hover {
      background-image: url('assets/images/button_join_pressed.svg');
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
        <a id="launchOptionHost" href="./launchhost"><img id="host" src="assets/images/button_host.svg"></a>
        <a id="launchOptionJoin" href="./launchjoin"><img id="join" src="assets/images/button_join.svg"></a>
      </span>
      </div>
    `;
  }
}