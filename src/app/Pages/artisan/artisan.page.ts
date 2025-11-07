import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.page.html',
  styleUrls: ['./artisan.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ArtisanPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
