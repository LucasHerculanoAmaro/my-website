import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', redirectTo: 'start', pathMatch: 'full'}, 

  { path: 'start', component:StartComponent},
  { path: 'page', component:PageComponent},
  { path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

