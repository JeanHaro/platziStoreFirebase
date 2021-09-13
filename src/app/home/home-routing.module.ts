import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    // Ruta inicial
    // Es el elemento inicial con el que va a iniciar el modulo 
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    // Tiene metadata que son las rutas
    imports: [
        // rutas en especifico con forChild
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {

}