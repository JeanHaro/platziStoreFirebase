import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/services/products/products.service'; 

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  // Esto se saca de Angular Material
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor (private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  // Para mandar datos
  fetchProducts () {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = this.products;
    })
  }
}
