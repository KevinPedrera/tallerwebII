import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  cargando: boolean = false;
  mensajeEnviado: boolean = false;

  formulario = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  enviarMensaje() {
    this.cargando = true;

    setTimeout(() => {
      this.cargando = false;
      this.mensajeEnviado = true;
      
      this.formulario = { nombre: '', email: '', asunto: '', mensaje: '' };

      setTimeout(() => {
        this.mensajeEnviado = false;
      }, 5000);
      
    }, 1500);
  }
}
