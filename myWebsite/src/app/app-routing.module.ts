import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pagehome/home.component';
import { AboutMePage } from './pageaboutme/aboutme.component';
import { ContactMePage } from './pagecontactme/contactme.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePage },
  { path: 'aboutme', component: AboutMePage },
  { path: 'contactme', component: ContactMePage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
