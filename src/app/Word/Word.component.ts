import { Component, Input } from '@angular/core';
import { Guess } from '../app.component';

@Component({
  selector: 'word',
  templateUrl: './Word.component.html',
  styleUrls: ['./Word.component.css'],
})
export class WordComponent {
  @Input() word!: string;
  @Input() guesses!: Guess[];
}
