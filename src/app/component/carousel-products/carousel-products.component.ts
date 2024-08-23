import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../utils/product';
import *as productData from '../../../../public/json/productData.json';

@Component({
  selector: 'app-carousel-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-products.component.html',
  styleUrl: './carousel-products.component.css'
})

export class CarouselProductsComponent {
  products: Product[] = (productData as any).default;

  constructor(private Router: Router) { }

  ngOnInit(): void {}

  onClickProduct(product: Product): void {
    this.Router.navigate(['/products', product.id]);
  }
}
