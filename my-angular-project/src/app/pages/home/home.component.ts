import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Update if you're using SCSS
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToModel(): void {
    this.router.navigate(['/3d-model']);
  }
}
