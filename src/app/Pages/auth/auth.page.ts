import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/Services/auth-service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AuthPage implements OnInit {

  modoRegistro = false;
  usuario = {
    nombre: '',
    correo: '',
    contrasena: '',
    rol: '',
    ubicacion: '',
    tags: ''
  };

  private auth = inject(AuthService);
  private router = inject(Router);
  private toast = inject(ToastService);

  onSubmit() {
    if (this.modoRegistro) {
      const registroData: any = {
        nombre: this.usuario.nombre,
        correo: this.usuario.correo,
        contrasena: this.usuario.contrasena,
        roles: this.usuario.rol,
      };

      // Solo agregar ubicación y tags si es ARTESANO
      if (this.usuario.rol === 'ARTESANO') {
        if (this.usuario.ubicacion) {
          registroData.ubicacion = this.usuario.ubicacion;
        }
        if (this.usuario.tags) {
          // Convertir string separado por comas en array
          registroData.tags = this.usuario.tags
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0);
        }
      }

      this.auth.register(registroData).subscribe({
        next: (response) => {
          console.log('Registro exitoso', response);
          this.toast.success(`¡Bienvenido ${response.data.user.nombre}!`);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error en registro', error);
          this.toast.error(error.error?.message || 'Error en el registro. Intenta nuevamente');
        }
      });
    } else {
      this.auth.login({
        correo: this.usuario.correo,
        contrasena: this.usuario.contrasena
      }).subscribe({
        next: (response) => {
          console.log('Login exitoso', response);
          this.toast.success(`¡Bienvenido de nuevo ${response.data.user.nombre}!`);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error en login', error);
          this.toast.error(error.error?.message || 'Credenciales incorrectas');
        }
      });
    }
  }

  toggleModo() {
    this.modoRegistro = !this.modoRegistro;
    this.usuario = { nombre: '', correo: '', contrasena: '', rol: '', ubicacion: '', tags: '' };
  }

  ngOnInit(): void {
    // Redirigir si ya está autenticado
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }
}
