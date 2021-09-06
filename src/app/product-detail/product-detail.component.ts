import { Component, OnInit } from '@angular/core';
// ActiveRoute - Inyección de dependencia
// Params - es de tipado
import { ActivatedRoute, Params } from '@angular/router';

// Servicios
import { ProductsService } from './../products.service';

// Interfaces
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  // Recibir datos
  ngOnInit(): void {
    // Los parametros que tenga en la ruta
    // Como va cambiando el id, lo que vamos hacer es subscribirnos a ese cambio
    this.route.params.subscribe((params: Params) => {
      // Todos los parametros que tenga ese componente
      const id = params.id;
      // Lo guardamos en una variable constante product
      // Verifica si es el id en los servicios
      this.product = this.productService.getProduct(id)!;
    })
  }
}
