import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
isMenuOpen: boolean = false;

  // Alternar menú (abrir/cerrar)
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // UX: Cerrar menú al hacer clic en un enlace (importante para móvil)
  closeMenu() {
    this.isMenuOpen = false;
  }
}
