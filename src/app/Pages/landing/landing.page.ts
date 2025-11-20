import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonIcon, IonContent, IonRouterLinkWithHref } from "@ionic/angular/standalone";
import { RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonRouterLinkWithHref, RouterLinkWithHref]
})
export class LandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
