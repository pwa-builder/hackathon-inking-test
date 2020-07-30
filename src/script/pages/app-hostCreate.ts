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

  #logo {      
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
     
  #hostOptionCreate {
    margin: 0;
    position: absolute;
    top: 35%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    background-image: url('assets/images/button_create.svg');
  }

  #hostOptionCalendar {
    margin: 0;
    position: absolute;
    top: 55%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  #hostOptionCreate:hover {
    background-image: url('assets/images/button_create_pressed.svg');
  }

  #hostOptionCalendar:hover {
    background-image: url('assets/images/button_calendar_pressed.svg');
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
      <img src="assets/images/code_generated.svg">
      <a href="./play"><img src="assets/images/button_start.svg"></a>
      </div>
    `;
  }
}