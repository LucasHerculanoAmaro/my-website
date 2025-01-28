import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(private themeService : ThemeService) {}

  ngOnInit(): void {
    this.themeService.applyTheme(this.themeService.getCurrentThemeIndex());
  }

  cycleThemes() : void {
    this.themeService.cycleThemes();
  }

}