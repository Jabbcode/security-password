import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TarjetaCategoriaComponent } from './components/tarjeta-categoria/tarjeta-categoria.component';
import { CategoriaComponent } from './components/categoria/categoria.component';


@NgModule({
  declarations: [
    CategoriasComponent,
    TarjetaCategoriaComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    FontAwesomeModule
  ]
})
export class InformacionModule { }
