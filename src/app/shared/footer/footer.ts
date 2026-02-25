import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  anio = new Date().getFullYear();
  
  mostrarMensajeExito: boolean = false; 
  
  suscribirse(event: Event, emailInput: HTMLInputElement) {
    event.preventDefault(); 
    if (emailInput.value.trim() !== '') {
      this.mostrarMensajeExito = true;
      emailInput.value = '';
      setTimeout(() => {
        this.mostrarMensajeExito = false;
      }, 3500);
    }
  }
}
