import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario-service';
import { CursoService } from '../../services/curso-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profesor.html',
  styleUrl: './profesor.css',
})
export class Profesor implements OnInit {
  private usuarioService = inject(UsuarioService);
  private cursoService = inject(CursoService);

  profesorActual: any = null;
  tabActiva: string = 'dashboard';

  misCursos = signal<any[]>([]);
  misEstudiantes = signal<any[]>([]);

  ngOnInit() {
    this.cargarPerfil();
  }

  cargarPerfil() {
    const email = localStorage.getItem('email');
    if (email) {
      this.usuarioService.getUsuarioPorEmail(email).subscribe({
        next: (user) => {
          this.profesorActual = user;
          this.cargarMisDatos();
        },
        error: (err) => console.error('Error al cargar perfil', err)
      });
    }
  }

  cargarMisDatos() {
    this.cursoService.getCursos().subscribe({
      next: (cursos) => {
        const nombreProfe = this.profesorActual?.nombre?.trim() || 'INDEFINIDO_XXX';
        const apellidoProfe = this.profesorActual?.apellido?.trim() || 'INDEFINIDO_XXX';
        
        const cursosFiltrados = cursos.filter(c => 
          c.instructor && (c.instructor.includes(nombreProfe) || c.instructor.includes(apellidoProfe))
        );
        
        this.misCursos.set(cursosFiltrados);
        this.cargarEstudiantesInscritos(cursosFiltrados);
      }
    });
  }

  cargarEstudiantesInscritos(misCursosArr: any[]) {
    const idsMisCursos = misCursosArr.map(c => c.id);

    this.usuarioService.getUsuarios().subscribe({
      next: (usuarios) => {
        const estudiantes = usuarios.filter(u => u.perfil === 'estudiante');
        const estudiantesMios: any[] = [];

        estudiantes.forEach(est => {
          if (est.cursos && est.cursos.length > 0) {
            const cursosComun = est.cursos.filter((c: any) => idsMisCursos.includes(c.id));
            
            if (cursosComun.length > 0) {
              estudiantesMios.push({
                ...est,
                cursosTomados: cursosComun
              });
            }
          }
        });

        this.misEstudiantes.set(estudiantesMios);
      }
    });
  }

  cambiarTab(tab: string) {
    this.tabActiva = tab;
  }

  guardarPerfil() {
    if (this.profesorActual && this.profesorActual.id) {
      this.usuarioService.putUsuario(this.profesorActual.id, this.profesorActual).subscribe({
        next: () => alert('¡Información actualizada con éxito!'),
        error: () => alert('Error al actualizar la información.')
      });
    }
  }
}