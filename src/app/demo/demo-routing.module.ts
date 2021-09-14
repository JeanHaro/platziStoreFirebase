import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
    // Ruta inicial
    // Es el elemento inicial con el que va a iniciar el modulo 
    {
        path: '',
        component: DemoComponent
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
export class DemoRoutingModule {

}