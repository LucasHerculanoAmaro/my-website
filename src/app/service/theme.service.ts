import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes: string[] = ['secondary', 'principal'];
  private currentThemeIndex: number = 0;

  constructor() {
    if (this.isBrowser()) {
      // Recupera o tema salvo no localStorage
      const savedThemeIndex = localStorage.getItem('selectedThemeIndex');
      this.currentThemeIndex = savedThemeIndex !== null ? parseInt(savedThemeIndex, 10) : 0;
      console.log('Tema salvo:', this.themes[this.currentThemeIndex]);
      this.applyTheme(this.currentThemeIndex);
    }
  }

  // Aplica o tema atual
  applyTheme(themeIndex: number): void {
    if (this.isBrowser()) {
      console.log('Aplicando tema:', this.themes[themeIndex]);
      document.body.className = this.themes[themeIndex];
      localStorage.setItem('selectedThemeIndex', themeIndex.toString());
    }
  }

  // Alterna para o próximo tema
  cycleThemes(): void {
    this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themes.length;
    this.applyTheme(this.currentThemeIndex);
  }

  // Verifica se está no navegador
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // Obtém o índice do tema atual
  getCurrentThemeIndex(): number {
    return this.currentThemeIndex;
  }
}
