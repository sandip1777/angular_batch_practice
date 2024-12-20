import { Component } from '@angular/core';

@Component({
  selector: 'amol-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  constructor() {
    this.addition(this.values)
  }

  values = [2,3]
  sum = 0

  addition(valArr:number[]) {

    let sum = 0

    for (let i = 0; i < valArr.length; i++) {
      sum += valArr[i];
    }

    console.log(sum); // 5
    console.log(this.sum); // 0
    // console.log(i); // err
  }

}
