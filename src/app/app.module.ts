import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { StartComponent } from './start/start.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FirstPageComponent } from './component/first-page/first-page.component';
import { SecondPageComponent } from './component/second-page/second-page.component';
import { ProfessionalComponent } from './component/professional/professional.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    StartComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    FirstPageComponent,
    SecondPageComponent,
    ProfessionalComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
