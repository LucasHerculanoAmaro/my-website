import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ProfessionalComponent } from './pages/professional/professional.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { StudiesComponent } from './pages/studies/studies.component';
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
    provide: LocationStrategy, 
    useClass: HashLocationStrategy
  },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
