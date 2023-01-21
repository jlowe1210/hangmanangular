import { Component } from '@angular/core';

@Component({
  selector: 'hangman-rightleg',
  template: `<div class="rightleg"></div>`,
  styles: [
    `
      .rightleg {
        width: 8%;
        border: 3px solid black;
        transform: translate(-10px, 17px) rotate(139deg);
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
export class RightlegComponent {}
