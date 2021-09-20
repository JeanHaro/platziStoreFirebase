import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// map - transformar el valor que nos llega por uno nuevo
import { map } from 'rxjs/operators';

// Servicio
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Observable de valor numero
  total$: Observable<number>;

  constructor(private cartService: CartService) { 
    // Acá obtenemos los productos que se vayan agregando al carrito
    // En map, se sentencia como lo vamos a transformar a un valor que es el tamaño de la lista
     // Ahora nos suscribimos, pero desde el template
    this.total$ = this.cartService.cart$.pipe(map(products => products.length));
  }

  ngOnInit(): void {
  }



}
