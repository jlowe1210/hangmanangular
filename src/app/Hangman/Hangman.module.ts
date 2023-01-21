import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanComponent } from './Hangman.component';
import { HeadComponent } from './Head/Head.component';
import { BodyComponent } from './Body/Body.component';
import { LeftarmComponent } from './Leftarm/Lermarm.component';
import { RightarmComponent } from './Rightarm/Rightarm.component';
import { LeftlegComponent } from './Leftleg/Leftleg.component';
import { RightlegComponent } from './Rightleg/Rightleg.component';

@NgModule({
  declarations: [
    HangmanComponent,
    HeadComponent,
    BodyComponent,
    LeftarmComponent,
    RightarmComponent,
    LeftlegComponent,
    RightlegComponent,
  ],
  imports: [CommonModule],
  exports: [HangmanComponent],
})
export class HangmanModule {}
