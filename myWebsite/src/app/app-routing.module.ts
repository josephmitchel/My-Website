import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeTab } from './aboutme/aboutme.component';
import { ProjectsTab } from './projects/projects.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: AboutMeTab },
  { path: 'aboutme', component: ProjectsTab },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
