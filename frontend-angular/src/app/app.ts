import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  standalone: true,                    
  imports: [CommonModule, Home],                
  template: `<app-home></app-home>`, 
  styleUrls: ['./app.css']             
})
export class App {
  protected readonly title = signal('medina-finder');
}
