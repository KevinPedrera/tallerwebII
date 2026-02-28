import { Component, inject, signal, OnInit } from '@angular/core';
import { RecursoService } from '../../services/recurso-service';
import { UsuarioService } from '../../services/usuario-service';
import { AuthService } from '../../services/auth-service';
import { Recurso } from '../../models/recurso';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestor-recursos',
  imports: [FormsModule, CommonModule],
  templateUrl: './gestor-recursos.html',
  styleUrl: './gestor-recursos.css',
})
export class GestorRecursos implements OnInit {
  private servicioRecurso = inject(RecursoService);
  private usuarioService = inject(UsuarioService);
  authService = inject(AuthService);

  listaRecursos = signal<Recurso[]>([]);
  usuarioActual: any = null;

  nuevoRecurso: Recurso = { titulo: '', tipo: '', enlace: '', autor: '' };
  editando = false;
  cargando = false;

  ngOnInit() {
    this.obtenerRecursos();
    this.cargarUsuario();
  }

  cargarUsuario() {
    const email = localStorage.getItem('email');
    if (email) {
      this.usuarioService.getUsuarioPorEmail(email).subscribe(user => {
        this.usuarioActual = user;
        this.nuevoRecurso.autor = `${user.nombre} ${user.apellido}`;
      });
    }
  }

  obtenerRecursos() {
    this.servicioRecurso.getRecursos().subscribe(datos => {
      this.listaRecursos.set(datos);
    });
  }

  guardarRecurso() {
    this.cargando = true;
    if (this.editando && this.nuevoRecurso.id) {
      this.servicioRecurso.putRecurso(this.nuevoRecurso.id, this.nuevoRecurso).subscribe(() => {
        this.obtenerRecursos();
        this.resetear();
      });
    } else {
      this.servicioRecurso.postRecurso(this.nuevoRecurso).subscribe(() => {
        this.obtenerRecursos();
        this.resetear();
      });
    }
  }

  seleccionarParaEditar(recurso: Recurso) {
    this.editando = true;
    this.nuevoRecurso = { ...recurso };
  }

  eliminarRecurso(id: number) {
    if (confirm('¿Estás seguro de eliminar este recurso educativo?')) {
      this.servicioRecurso.deleteRecurso(id).subscribe(() => {
        this.obtenerRecursos();
      });
    }
  }

  resetear() {
    this.editando = false;
    this.cargando = false;
    this.nuevoRecurso = { 
      titulo: '', tipo: '', enlace: '', 
      autor: this.usuarioActual ? `${this.usuarioActual.nombre} ${this.usuarioActual.apellido}` : '' 
    };
  }
}