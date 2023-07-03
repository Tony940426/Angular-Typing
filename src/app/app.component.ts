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
  solved = true;

  onInput(value: string) {
    this.userInput = value;
    if (value === this.randomText) {
      this.solved = false;
    }

  }
}
