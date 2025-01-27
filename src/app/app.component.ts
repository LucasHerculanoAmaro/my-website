
import { Component } from '@angular/core';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<app-menu></app-menu> <router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Meu Portifólio';
  
  constructor(private themeService : ThemeService){
    
  }
}
