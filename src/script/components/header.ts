import { LitElement, css, html, customElement, property } from 'lit-element';
import {gametitle} from '../locales/en';

@customElement('app-header')
export class AppHeader extends LitElement {

  @property({ type: String }) title: string = gametitle;

  static get styles() {
    return css`
      header {
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        background: var(--app-color-primary);
        color: white;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 24px;
        font-weight: normal;
        vertical-align: middle;
      }

      nav {
        width: 7em;
        display: flex;
        justify-content: space-between;
      }

      nav a {
        color: white;
        font-size: 18px;
        font-weight: bold;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <h1>${this.title}</h1>
      </header>
    `;
  }
}