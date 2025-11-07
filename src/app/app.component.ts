import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonContent, IonFooter, IonToolbar } from '@ionic/angular/standalone';
import { NavPage } from "./nav/nav.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonRouterOutlet, IonHeader, IonToolbar, NavPage, IonContent],
})
export class AppComponent {
  constructor() {}
}
