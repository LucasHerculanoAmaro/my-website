import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [

  { path: '', redirectTo: 'start', pathMatch: 'full'}, 

  { path: 'start', component:StartComponent},
  { path: 'page', component:PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

