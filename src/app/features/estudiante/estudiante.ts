import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursoService } from '../../services/curso-service';
import { UsuarioService } from '../../services/usuario-service';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudiante.html',
  styleUrl: './estudiante.css',
})
export class Estudiante implements OnInit {
  private cursoService = inject(CursoService);
  private usuarioService = inject(UsuarioService);

  // Variables de estado
  tabActiva: string = 'catalogo';
  subTabCursos: string = 'inscritos';
  
  usuarioActual: any = null;
  cursosDisponibles = signal<any[]>([]);
  
  profesoresRegistrados = signal<any[]>([]);

  ngOnInit() {
    this.cargarPerfil();
    this.cargarCatalogo();
    this.cargarProfesores();
  }

  cargarPerfil() {
    const email = localStorage.getItem('email');
    if (email) {
      this.usuarioService.getUsuarioPorEmail(email).subscribe({
        next: (user) => this.usuarioActual = user,
        error: (err) => console.error('Error al cargar perfil', err)
      });
    }
  }

  cargarCatalogo() {
    this.cursoService.getCursos().subscribe({
      next: (data) => {
        this.cursosDisponibles.set(data);
      }
    });
  }

  cargarProfesores() {
    this.usuarioService.getProfesores().subscribe({
      next: (data) => {
        console.log("Profesores desde la BD:", data); // Para que confirmes en consola (F12)
        this.profesoresRegistrados.set(data);
      },
      error: (err) => console.error('Error al cargar profesores', err)
    });
  }

  cambiarTab(tab: string) {
    this.tabActiva = tab;
  }

  inscribirse(curso: any) {
    if (this.usuarioActual && this.usuarioActual.id) {
      this.usuarioService.inscribirCurso(this.usuarioActual.id, curso.id).subscribe({
        next: (userActualizado) => {
          this.usuarioActual = userActualizado;
          alert(`¡Felicidades! Te has inscrito en: ${curso.titulo}`);
          this.cambiarTab('mis-cursos');
        },
        error: (err) => alert('Hubo un error al inscribirte.')
      });
    }
  }

  yaEstaInscrito(cursoId: number): boolean {
    if (!this.usuarioActual || !this.usuarioActual.cursos) return false;
    return this.usuarioActual.cursos.some((c: any) => c.id === cursoId);
  }

  guardarPerfil() {
    this.usuarioService.putUsuario(this.usuarioActual.id, this.usuarioActual).subscribe({
      next: () => alert('¡Información actualizada con éxito!'),
      error: () => alert('Error al actualizar la información.')
    });
  }
}