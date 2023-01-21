import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameStatus, Guess } from '../app.component';

@Component({
  selector: 'letters',
  templateUrl: 'Letters.component.html',
  styleUrls: ['./Letters.component.css'],
})
export class LettersComponent {
  @Input() letters!: string[];
  @Input() status!: GameStatus;
  @Output() emittedLetter: EventEmitter<string> = new EventEmitter<string>();
  handleEmittedLetter(evt: string) {
    this.emittedLetter.emit(evt);
  }
}
