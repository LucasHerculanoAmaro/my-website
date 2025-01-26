import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProfessionalComponent } from './component/professional/professional.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { IntroductionComponent } from './component/introduction/introduction.component';
import { StudiesComponent } from './component/studies/studies.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    FooterComponent,

    IntroductionComponent,
    ProfessionalComponent,
    ProjectsComponent,
    StudiesComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
  // , {provide: LocationStrategy, useClass: HashLocationStrategy}
})
export class AppModule { }
