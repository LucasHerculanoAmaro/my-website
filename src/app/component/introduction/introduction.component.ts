import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {

  // Lista de temas
  themes: string[] = ['secondary', 'principal'];
  currentThemeIndex: number = 0; // Índice do tema atual

  constructor() {}

  ngOnInit(): void {
    // Recupera o tema salvo no localStorage ao carregar o componente
    const savedThemeIndex = localStorage.getItem('selectedThemeIndex');
    this.currentThemeIndex = savedThemeIndex !== null ? parseInt(savedThemeIndex, 10) : 0;
    this.applyTheme(this.currentThemeIndex);
  }

  // Aplica o tema atual ao body e salva no localStorage
  applyTheme(themeIndex: number): void {
    document.body.className = this.themes[themeIndex]; // Aplica a classe ao body
    localStorage.setItem('selectedThemeIndex', themeIndex.toString()); // Salva no localStorage
  }

  // Alterna para o próximo tema
  cycleThemes(): void {
    this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themes.length; // Próximo tema
    this.applyTheme(this.currentThemeIndex); // Aplica o tema
  }

}
