import { Component, Input } from '@angular/core';

@Component({
  selector: 'hangman',
  templateUrl: 'Hangman.component.html',
  styleUrls: ['Hangman.component.css'],
})
export class HangmanComponent {
  @Input() wrongGuess!: number;
}
