import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  enviarMensaje(event: Event) {
    event.preventDefault(); // Evita que la página se recargue
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    // Aquí iría la lógica real de backend
  }
}
