import { Component } from '@angular/core';

@Component({
  selector: 'hangman-leftleg',
  template: `<div class="leftleg"></div>`,
  styles: [
    `
      .leftleg {
        width: 8%;
        border: 3px solid black;
        transform: translate(9px, 23px) rotate(42deg);
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
export class LeftlegComponent {}
