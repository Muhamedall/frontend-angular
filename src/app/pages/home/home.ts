import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero/hero';
import { Offers } from '../offers/offers';
import { Layouts } from '../../shared/layouts/layouts';
@Component({
  selector: 'app-home',
  imports: [ CommonModule, Hero , Layouts , Offers ],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.css',
  
  
})
export class Home {

}
