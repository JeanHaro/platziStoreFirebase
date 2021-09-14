import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
    // Ruta inicial
    // Es el elemento inicial con el que va a iniciar el modulo 
    {
        path: '',
        component: ContactComponent
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
export class ContactRoutingModule {

}