import { Component } from '@angular/core';

@Component({
  selector: 'app-homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.css']
})
export class HomecardComponent {
  printToConsole(): void {
    console.log('please work');
  }
}
