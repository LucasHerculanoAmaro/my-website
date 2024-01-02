import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicoComponent } from './academico/academico.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { ProfissionalComponent } from './profissional/profissional.component';



const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'}, 

  { path: 'inicio', component:InicioComponent},
  { path: 'menu', component:MenuComponent},
  { path: 'contato', component:ContatoComponent},
  { path: 'academico', component:AcademicoComponent},
  { path: 'apresentacao', component:ApresentacaoComponent},
  { path: 'profissional', component:ProfissionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

