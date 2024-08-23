import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: '**', component: Error404Component },
    { path: '', pathMatch: 'full', redirectTo: '/home' }
];
