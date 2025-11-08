import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/Services/auth-service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AuthPage implements OnInit {

 modoRegistro = false;
  usuario = { nombre: '', correo: '', contrasena: '', rol: '' };

  constructor(private auth: AuthService) {}

  onSubmit() {
  //   if (this.modoRegistro) {
  //     this.auth.registrar({
  //       nombre: this.usuario.nombre,
  //       correo: this.usuario.correo,
  //       rol: this.usuario.rol,
  //     });
  //   } else {
  //     this.auth.iniciarSesion(this.usuario.correo, this.usuario.contrasena);
  //   }
  }

  toggleModo() {
    this.modoRegistro = !this.modoRegistro;
    this.usuario = { nombre: '', correo: '', contrasena: '', rol: '' };
  }

  ngOnInit(): void {

  }
}
