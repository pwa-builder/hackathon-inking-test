import { LitElement, css, html, customElement } from 'lit-element';
import { greetinghostcreate } from '../locales/en';


@customElement('app-hostcreate')
export class AppHostCreate extends LitElement {

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

    #code {      
        margin: 0;
        position: absolute;
        top: 35%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        font-size: 40px; 
        border-width: 50px;
        border-style: solid;
        border-image: url('assets/images/code_generated.svg') 25% round;
    }    

    #start {
        margin: 0;
        position: absolute;
        top: 60%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div id="main">
      <h3 id="greeting">${greetinghostcreate}</h3>
      <h3 id="code">cu$t0m c0de</h3>
      <div id="start">
      <a href="./play"><img src="assets/images/button_start.svg"></a>
      </div>
      </div>
    `;
  }
}