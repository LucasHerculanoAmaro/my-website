import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './component/introduction/introduction.component';
import { StudiesComponent } from './component/studies/studies.component';
import { ProfessionalComponent } from './component/professional/professional.component';
import { ProjectsComponent } from './component/projects/projects.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'}, 

  { path: 'home', component:IntroductionComponent },
  { path: 'studies', component:StudiesComponent },
  { path: 'professional', component:ProfessionalComponent },
  { path: 'projects', component:ProjectsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

