import { Component } from '@angular/core';

@Component({
  selector: 'hangman-rightarm',
  template: `<div class="rightarm"></div>`,
  styles: [
    `
      .rightarm {
        width: 8%;
        border: 3px solid black;
        transform: translate(-12px, -5px) rotate(-149deg);
      }

      .body,
      .head,
      .leftarm,
      .rightarm,
      .leftleg,
      .rightleg {
        margin: 0 auto;
      }
    `,
  ],
})
export class RightarmComponent {}
