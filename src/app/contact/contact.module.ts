import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { ContactComponent } from './components/contact/contact.component';

import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    // Acá estarán los componentes
    declarations: [
        ContactComponent
    ],
    // El routing se importa
    imports: [
        CommonModule,
        SharedModule,
        ContactRoutingModule
    ]
})
export class ContactModule {
    
}
