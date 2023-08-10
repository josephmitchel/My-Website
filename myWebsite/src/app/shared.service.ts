import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Service for sharing methods between components
export class SharedService {

  // Display Home Methods
  private displayHome: boolean = true;
  get DisplayHome(): boolean { return this.displayHome }
  set DisplayHome(value: boolean) { this.displayHome = value }

  // Display Education Methods
  private displayEducation: boolean = false;
  get DisplayEducation(): boolean { return this.displayEducation }
  set DisplayEducation(value: boolean) { this.displayEducation = value }

  changeDisplayToHome(): void {
    this.DisplayEducation = false;
    
    setTimeout(() => {
      this.DisplayHome = true;
      console.log("Delayed function executed!");
    }, 200);
  }

  changeDisplayToEducation(): void {
    this.DisplayHome = false;
    
    setTimeout(() => {
      this.DisplayEducation = true;
      console.log("Delayed function executed!");
    }, 200);    
  }
}
