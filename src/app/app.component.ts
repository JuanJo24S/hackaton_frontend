import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { NavPage } from "./nav/nav.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonRouterOutlet, IonHeader, IonToolbar, IonContent, NavPage],
})
export class AppComponent {
  constructor() {}
}
