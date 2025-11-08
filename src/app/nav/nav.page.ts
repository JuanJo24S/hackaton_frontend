import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../Services/auth-service';
import { Usuario } from '../Models/Auth.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterLink]
})
export class NavPage implements OnInit {

  logo: string = "assets/icon/NasaYuwe.png"
  menuAbierto = false;
  menuUsuarioAbierto = false;
  usuario: Usuario | null = null;

  private authService = inject(AuthService);

  ngOnInit() {
    this.usuario = this.authService.getUser();
  }

  cerrarSesion() {
    this.authService.logout();
  }

  toggleMenuUsuario() {
    this.menuUsuarioAbierto = !this.menuUsuarioAbierto;
  }

}
