import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/services/products/products.service'; 

import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];
  // Esto se saca de Angular Material
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor (private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  // Para mandar datos
  fetchProducts(): void {
    this.productsService.getAllProducts()
    .subscribe((products) => {
      this.products = products;
    })
  }

  deleteProduct (id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      this.fetchProducts();
    })
  }
}
