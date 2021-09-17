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

  // Creamos un producto
  createProduct (product: Product) {
    // En el segundo parámetro se envía el tipo, en este caso es Producto
    return this.http.post(`${environment.url_api}/products`, product);
  }

  // change: Partial<Product> - solo queremos una parte del producto
  updateProduct (id: string, changes: Partial<Product>) {
    // En el segundo parámetro se envía los cambios que se quiera cambiar
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct (id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
