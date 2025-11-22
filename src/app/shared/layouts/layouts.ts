import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layouts',
   standalone: true,  
  imports: [Navbar , CommonModule, RouterModule , Footer],
  templateUrl: './layouts.html',
  styleUrl: './layouts.css',
})
export class Layouts {

}
