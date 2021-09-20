import { Component, OnInit } from '@angular/core';

// Servicio
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total = 0;

  constructor(private cartService: CartService) { 
    // Acá obtenemos los productos que se vayan agregando al carrito
    this.cartService.cart$.subscribe(products => {
      console.log(products);
      this.total = products.length;
    })
  }

  ngOnInit(): void {
  }



}
