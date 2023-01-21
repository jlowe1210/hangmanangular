import { Component } from '@angular/core';

@Component({
  selector: 'hangman-leftman',
  template: `<div class="leftarm"></div>`,
  styles: [
    `
      .leftarm {
        width: 8%;
        border: 3px solid black;
        transform: translate(11px, 0px) rotate(-30deg);
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
export class LeftarmComponent {}
