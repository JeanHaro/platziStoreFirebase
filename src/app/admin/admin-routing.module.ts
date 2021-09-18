import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ProductFormComponent } from './components/product-form/product-form.component'; 
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {
    // Vacío para que enlace solamente cuando esté /admin
    path: '',
    component: NavComponent,
    // Vista anidada
    children: [
      {
        // Cuando hagamos create, va abrir el producto ProductFormComponent
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
