import { NgModule } from '@angular/core';

// Componentes
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    // Acá estarán los componentes
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    // El routing se importa
    imports: [
        HomeRoutingModule
    ]
})
export class HomeModule {
    
}
