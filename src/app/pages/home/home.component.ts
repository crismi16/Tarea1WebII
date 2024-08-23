import { Component } from '@angular/core';
import { CarouselOffersComponent } from '../../component/carousel-offers/carousel-offers.component';
import { CarouselProductsComponent } from '../../component/carousel-products/carousel-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselOffersComponent, CarouselProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
