import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Componentes
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

// Layout
import { LayoutComponent } from './layout/layout.component';

// Creando rutas en el Array vacío []
const routes: Routes = [
  {
    path: '',
    // Que este componente tenga un layout
    component: LayoutComponent,
    // Hijos del Layout
    children: [
      {
        // Cuando no haya path, redireccione al home
        path: '',
        // Redirección
        redirectTo: '/home',
        // Cuando tengamos la url en seco, sin ningún path
        pathMatch: 'full'
      },
      // Una ruta es un objeto
      { 
        // La página de la ruta
        path: 'home',
        // Cargar un módulo dinámicamente
        // then - nos dará una promesa, nos va a devolver el modulo del HomeModule
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    // Con doble asterisco es que no hubo match y mostrará el componente page-not-found
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Estrategia de precarga
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
