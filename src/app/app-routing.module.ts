import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Layout
import { LayoutComponent } from './layout/layout.component';

// Guardian
import { AdminGuard } from './admin.guard';

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
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    // Con doble asterisco es que no hubo match y mostrará el componente page-not-found
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
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
