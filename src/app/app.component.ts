import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;
  password = '';


  onChangeLength (value:Event) {

    const target = value.target as HTMLInputElement

    const parsedValue = parseInt(target.value)

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){

    this.includeNumbers = !this.includeNumbers;

  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;

  }

  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwyz'
    const number = '1234567890'
    const simbols = '!@#$%^&*()'
    let validChart = ''

    if(this.includeLetters) {
      validChart += letters;
    }
    if(this.includeSymbols){
      validChart += number;
    }
    if(this.includeNumbers) {
      validChart += simbols
    }

    let generatedPassword = ''

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChart.length)
      generatedPassword += validChart[index]
    }
    this.password = generatedPassword

  }


}
