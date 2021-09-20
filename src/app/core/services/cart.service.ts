import { Injectable } from '@angular/core';
// Reactivo
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Privado para que no todos tengan acceso a este array
  private products: Product[] = [];
  // Que sea con un array de Producto, y que inicio con un array en vacio 
  private cart = new BehaviorSubject<Product[]>([]);

  // Es de tipo observable para que cualquiera se suscriba a estes
  cart$ = this.cart.asObservable();

  constructor() { }

  // Metodo para agregar al carrito
  addCart (product: Product) {
    // Cada vez que agreguen algo al carrito inserte una nueva variable
    this.products = [...this.products, product];
    // Notificar a todos los componentes que están suscritos que hubo un cambio
    // Y se envía ese nuevo array
    this.cart.next(this.products);
  }
}
