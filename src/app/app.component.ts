import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  i = 0
  book = {
    name: 'life of pie',
    pages: 433,
    writer: 'Mr.amol bhalerao'
  }
  ngOnInit(): void {

  }
}
