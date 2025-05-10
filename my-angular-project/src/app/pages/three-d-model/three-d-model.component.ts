import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-three-d-model',
  standalone: true,
  templateUrl: './three-d-model.component.html',
  styleUrls: ['./three-d-model.component.css'], // Update if you're using SCSS
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class ThreeDModelComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const modelViewer = document.querySelector('model-viewer') as HTMLElement; // Cast to HTMLElement
    if (modelViewer) {
      modelViewer.style.width = '100vw';
      modelViewer.style.height = '100vh';
    }
  }
}
