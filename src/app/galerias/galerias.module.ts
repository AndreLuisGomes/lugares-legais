import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GaleriasRoutingModule } from './galerias-routing.module';
import { GaleriaComponent } from './galeria/galeria.component';


@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    GaleriasRoutingModule
  ]
})
export class GaleriasModule { }
