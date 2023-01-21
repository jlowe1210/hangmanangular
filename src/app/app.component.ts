import { Component, OnInit } from '@angular/core';
import randomWords from 'random-words';

export interface Guess {
  letter: string;
  Occurrences: number;
  guessCorrect: boolean;
}

export interface GameStatus {
  status: 'Won' | 'Lost' | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  get guesses() {
    return this._guesses;
  }
  set guesses(value) {
    const wrongGuessCount =
      value.filter((guess) => {
        return !guess.guessCorrect;
      }).length || 0;

    if (!this.gameStatus.status && wrongGuessCount === 6) {
      this.gameStatus.status = 'Lost';
    }
    const test = value.reduce((pre, cur) => {
      return (pre += cur.Occurrences);
    }, 0);
    const gameWon = this.word.length === test;

    if (!this.gameStatus.status && gameWon) {
      this.gameStatus.status = 'Won';
    }
    this._guesses = value;
  }

  private _guesses: Guess[] = [];
  public alphabet!: string[];
  public word!: string;
  public gameStatus: GameStatus = { status: null };

  ngOnInit(): void {
    this.alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    this.word = randomWords();
  }

  selectedLetter(letter: string) {
    const alreadyGuesses = this.guesses.find((guess) => {
      return guess.letter === letter;
    });

    if (alreadyGuesses) return;

    this.guesses = [
      ...this.guesses,
      {
        letter: letter,
        Occurrences: this.word.includes(letter)
          ? this.countOccurrences(letter, this.word.split(''))
          : 0,
        guessCorrect: this.word.includes(letter),
      },
    ];
  }

  countOccurrences(target: string, arr: string[]) {
    let count = 0;
    arr.forEach((value) => {
      if (target === value) {
        count++;
      }
    });
    return count;
  }

  getWrongGuessesCount(): number {
    return this.guesses.filter((guess) => {
      return !guess.guessCorrect;
    }).length;
  }

  resetGame() {
    this.gameStatus.status = null;
    this.guesses = [];
    this.word = randomWords();
  }
}
