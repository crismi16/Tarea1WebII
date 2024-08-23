import { Component } from '@angular/core';
import { Path } from '../../utils/path';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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
