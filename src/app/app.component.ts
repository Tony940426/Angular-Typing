import { Component } from '@angular/core';
import { faker } from "@faker-js/faker";;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.hacker.phrase();
  userInput = '';

  onInput(value: string) {
    this.userInput = value;
    }

    compare(randomLetter: string, enteredLetter: string){
      if(!enteredLetter) {
        return 'pending';
      }

      return randomLetter === enteredLetter ? 'correct' : 'incorrect'
    }
}
