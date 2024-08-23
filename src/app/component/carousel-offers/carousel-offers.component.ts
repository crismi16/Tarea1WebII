import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../utils/product';
import *as offerData from '../../../../public/json/offerData.json';

@Component({
  selector: 'app-carousel-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-offers.component.html',
  styleUrl: './carousel-offers.component.css'
})

export class CarouselOffersComponent {
  offers: Product[] = (offerData as any).default;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  onClickPokemon(offer: Product): void {
    this.router.navigate(['/ofertas', offer.id]);
  }
}
