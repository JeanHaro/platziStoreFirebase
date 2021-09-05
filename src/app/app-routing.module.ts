import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Creando rutas en el Array vacío []
const routes: Routes = [
  {
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
    // Enlazar componentes 
    /* Es una manera, también podríamos empezar a crear rutas por cada uno de los componentes de nuestra 
    página */
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
