import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionVentasComponent } from './gestion-ventas.component';
import { GestionVentasRoutingModule } from './gestion-ventas-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    GestionVentasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GestionVentasRoutingModule
  ]
})
export class GestionVentasModule { }
