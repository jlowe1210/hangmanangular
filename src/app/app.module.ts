import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HangmanModule } from './Hangman/Hangman.module';
import { LetterComponent } from './Letters/Letter/Letter.component';
import { LettersComponent } from './Letters/Letters.component';

import { WordComponent } from './Word/Word.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    LettersComponent,
    LetterComponent,
  ],
  imports: [BrowserModule, HangmanModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
