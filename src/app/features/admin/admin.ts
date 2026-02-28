import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario-service';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  private usuarioService = inject(UsuarioService);
  private authService = inject(AuthService);

  usuarios = signal<any[]>([]);
  usuariosFiltrados = signal<any[]>([]);
  adminActual: any = null;
  terminoBusqueda: string = '';
  mostrarModal: boolean = false;
  usuarioEnEdicion: any = null;

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios.set(data);
        this.usuariosFiltrados.set(data);

        const emailGuardado = localStorage.getItem('email');
        if (emailGuardado) {
          this.adminActual = data.find((u: any) => u.email === emailGuardado);
        }
      },
      error: (err) => console.error('Error al cargar usuarios desde la BD', err)
    });
  }

  // --- NUEVAS ESTADÍSTICAS ---
  get totalEstudiantes() {
    return this.usuarios().filter(u => u.perfil === 'estudiante').length;
  }

  get totalProfesores() {
    return this.usuarios().filter(u => u.perfil === 'profesor').length;
  }

  get totalAdmins() {
    return this.usuarios().filter(u => u.perfil === 'admin').length;
  }
  // ---------------------------

  buscarUsuario() {
    const termino = this.terminoBusqueda.toLowerCase();
    const filtrados = this.usuarios().filter(u => 
      u.nombre?.toLowerCase().includes(termino) ||
      u.apellido?.toLowerCase().includes(termino) ||
      u.email?.toLowerCase().includes(termino) ||
      u.cedula?.includes(termino)
    );
    this.usuariosFiltrados.set(filtrados);
  }

  eliminarUsuario(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario? Esta acción es irreversible.')) {
      this.usuarioService.deleteUsuario(id).subscribe({
        next: () => this.cargarUsuarios(),
        error: (err) => alert('Hubo un error al eliminar el usuario.')
      });
    }
  }

  abrirModalEdicion(usuario: any) {
    this.usuarioEnEdicion = { ...usuario };
    this.usuarioEnEdicion.password = ''; 
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.usuarioEnEdicion = null;
  }

  guardarCambios() {
    if (this.usuarioEnEdicion && this.usuarioEnEdicion.id) {
      this.usuarioService.putUsuario(this.usuarioEnEdicion.id, this.usuarioEnEdicion).subscribe({
        next: () => {
          this.cargarUsuarios(); 
          this.cerrarModal(); 
        },
        error: (err) => alert('Hubo un error al actualizar los datos.')
      });
    }
  }
}