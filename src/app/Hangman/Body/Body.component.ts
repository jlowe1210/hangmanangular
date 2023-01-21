import { Component } from '@angular/core';

@Component({
  selector: 'hangman-body',
  template: `<div class="body"></div>`,

  styles: [
    `
      .body {
        transform: rotate(90deg);
        width: 23%;
        border: 3px solid black;
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
export class BodyComponent {}
