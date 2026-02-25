import { Component, inject, signal } from '@angular/core';
import { RecursoService } from '../../services/recurso-service';
import { Recurso } from '../../models/recurso';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestor-recursos',
  imports: [FormsModule, CommonModule],
  templateUrl: './gestor-recursos.html',
  styleUrl: './gestor-recursos.css',
})
export class GestorRecursos {
  private servicioRecurso = inject(RecursoService);

  listaRecursos = signal<Recurso[]>([]);

  nuevoRecurso: Recurso = {
    titulo: '',
    tipo: '',
    enlace: ''
  };

  editando = false;
  cargando = false;

  ngOnInit() {
    this.obtenerRecursos();
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

  eliminarRecurso(id: string) {
    if (confirm('¿Estás seguro de eliminar este recurso educativo?')) {
      this.servicioRecurso.deleteRecurso(id).subscribe(() => {
        this.obtenerRecursos();
      });
    }
  }

  resetear() {
    this.editando = false;
    this.cargando = false;
    this.nuevoRecurso = { titulo: '', tipo: '', enlace: '' };
  }
}
