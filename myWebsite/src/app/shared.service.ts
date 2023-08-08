import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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
    this.DisplayHome = true;
    this.DisplayEducation = false;
  }

  changeDisplayToEducation(): void {
    this.DisplayHome = false;
    this.DisplayEducation = true;
  }
}
