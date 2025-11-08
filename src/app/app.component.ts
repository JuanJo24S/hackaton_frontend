import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonContent, IonFooter, IonToolbar } from '@ionic/angular/standalone';
import { NavPage } from "./nav/nav.page";
import { AuthPage } from "./Pages/auth/auth.page";
import { AuthService } from './Services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonRouterOutlet, IonHeader, IonToolbar, NavPage, IonContent, AuthPage, CommonModule],
})
export class AppComponent implements OnInit {
  estaAutenticado = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
}
