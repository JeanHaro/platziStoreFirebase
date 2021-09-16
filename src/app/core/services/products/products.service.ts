import { Injectable } from '@angular/core';

// Cliente HTTP
import { HttpClient } from '@angular/common/http';

// Interfaces
import { Product } from '../../models/product.model';

// Environments
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor (private http: HttpClient) { }

  // Método que te devuelve todos los productos 
  getAllProducts() {
    // get - solicitar información
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  // Recibe el id del producto que queremos buscar
  getProduct (id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }
}
