import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { StudiesComponent } from './pages/studies/studies.component';
import { ProfessionalComponent } from './pages/professional/professional.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: IntroductionComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'professional', component: ProfessionalComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
