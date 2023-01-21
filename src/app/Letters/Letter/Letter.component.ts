import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameStatus, Guess } from 'src/app/app.component';

@Component({
  selector: 'letter',
  templateUrl: 'Letter.component.html',
  styleUrls: ['Letter.component.css'],
})
export class LetterComponent {
  @Input() isWordLetter!: boolean;
  @Input() status!: GameStatus;
  @Input() letter!: string;
  @Input() guesses: Guess[] | null = null;
  @Output() emittedLetter: EventEmitter<string> = new EventEmitter<string>();

  emitLetter(): void {
    this.emittedLetter.emit(this.letter);
  }

  showIfGuessCorrect(letter: string) {
    if (!this.guesses) return false;

    return this.guesses!.some((guess) => {
      return guess.letter === letter && guess.guessCorrect;
    });
  }
}
