import { Component } from '@angular/core';
// import { convert } from '../../../index.js'

// declare var convert: any;

// console.log(convert(111))

declare var convert: any;

console.log(convert(123))

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Checkify';
  convert = convert;
  Number = Number;
  newAmount = 'Please, enter a number.'
}
