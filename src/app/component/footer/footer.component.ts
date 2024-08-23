import { Component } from '@angular/core';
import { Path } from '../../utils/path';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  paths: Path[] = [
    {
      path: '/home',
      nombre: 'Home'
    },
    {
      path: '/nosotros',
      nombre: 'Nosotros'
    },
    {
      path: '/productos',
      nombre: ' Productos'
    }
  ]
}
