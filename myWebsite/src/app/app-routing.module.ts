import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeTab } from './aboutme/aboutme.component';
import { EducationTab } from './education/education.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: AboutMeTab },
  { path: 'education', component: EducationTab },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
