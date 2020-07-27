import { LitElement, css, html, customElement, property, query, internalProperty } from 'lit-element';

import '@pwabuilder/pwa-inking';

declare var io: any;

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties in lit-element
  // check out this link https://lit-element.polymer-project.org/guide/properties#declare-with-decorators
  @property() message: string = "Welcome!";

  @query('inking-canvas') private inkingCanvas: any;

  @internalProperty() socket: any = null;

  static get styles() {
    return css`

      #welcomeBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      #welcomeBlock h2 {
        margin-bottom: 0;
      }

      #welcomeBlock p {
        max-width: 22em;
      }

      #welcomeBlock img {
        width: 6em;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      button {
        cursor: pointer;
      }

      #realTime {
        position: fixed;
        bottom: 0;
        border: solid 2px black;
      }

      @media(spanning: single-fold-vertical) {
        #welcomeBlock {
          width: 50%;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit-element
    // for more info check out the lit-element docs https://lit-element.polymer-project.org/guide/lifecycle
    console.log('This is your home page');

    if (this.inkingCanvas) {
      this.inkingCanvas.requestBlob();

      this.inkingCanvas.addEventListener('inking-canvas-blob-requested', (e: CustomEvent) => {
        console.log("blob updated event received");
        console.log(e.detail.blob);
      }, false);

      this.inkingCanvas.addEventListener('inking-canvas-pointer-move', (e: CustomEvent) => {
        console.log("pointer move event received");
        console.log(e.detail);

        if (this.socket) {
          this.socket.emit('drawing', e.detail);
        }
      }, false);

    }

    this.socket = this.socket_connect('pwabuilder');
    this.setupLiveEvents(this.socket);

  }

  socket_connect(room: any) {
    return io('https://inking-server.azurewebsites.net/', {
      query: 'r_var=' + room
    });

    /*return io('http://localhost:3000/', {
      query: 'r_var=' + room
    });*/
  }

  setupLiveEvents(socket: any) {
    console.log('setting up live events', socket);
    if (socket) {
      console.log('in here');
      const realTimeCanvas = (this.shadowRoot?.querySelector("#realTime") as HTMLCanvasElement);
      realTimeCanvas.width = window.innerWidth;
      realTimeCanvas.height = 300;

      const realTimeContext = realTimeCanvas?.getContext('2d');

      console.log('hello world');

      socket.on('drawing', (data: any) => {
        console.log('hello world');
        if (realTimeContext) {
          realTimeContext.strokeStyle = data.color;

          realTimeContext.globalCompositeOperation = data.globalCompositeOperation;

          if (data.pointerType === 'pen') {
            let tweakedPressure = data.pressure * 6;
            realTimeContext.lineWidth = data.width + tweakedPressure;
          }

          else if (data.pointerType === 'touch') {
            realTimeContext.lineWidth = data.width - 20;
          }
          else if (data.pointerType === 'mouse') {
            realTimeContext.lineWidth = 4;
          }

          if (data.globalCompositeOperation === 'destination-out') {
            realTimeContext.lineWidth = 18;
          }

          realTimeContext.beginPath();

          realTimeContext.moveTo(data.x0, data.y0);


          realTimeContext.lineTo(data.x1, data.y1);


          realTimeContext.stroke();

          realTimeContext.lineCap = 'round';
          realTimeContext.lineJoin = 'round';

          realTimeContext.closePath();
        }
      })
    }
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      })
    }
  }

  render() {
    return html`
      <div>

        <div>
          <inking-canvas height="500" name="test">
            <inking-toolbar canvas="test"></inking-toolbar>
          </inking-canvas>

          <p>Real-time canvas</p>

          <canvas id="realTime"></canvas>
        </div>
      </div>
    `;
  }
}