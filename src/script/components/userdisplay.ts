import { LitElement, css, html, customElement, property } from 'lit-element';


@customElement('app-userdisplay')
export class AppHeader extends LitElement {

  @property({ type: String }) title: string = 'Scuttlebutt';

  static get styles() {
    return css`
    .profilePic {
        height: 25px;
        width: 25px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }

    .profileName {
        display: inline-block;
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <span class="profilePic"></span>
    <span class="profileName"><i>user name</i></span>
    <p></p>
    `;
  }
}