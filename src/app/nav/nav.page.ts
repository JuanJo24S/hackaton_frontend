import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule]
})
export class NavPage implements OnInit {

  constructor() { }

  logo:string = "assets/icon/NasaYuwe.png"

  ngOnInit() {
  }

}
