import { Component } from '@angular/core';

@Component({
  selector: 'hangman-head',
  template: `<div class="head"></div>`,
  styles: [
    `
      .head {
        width: 40px;
        height: 40px;
        background-color: black;
        border-radius: 50%;
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
export class HeadComponent {}
