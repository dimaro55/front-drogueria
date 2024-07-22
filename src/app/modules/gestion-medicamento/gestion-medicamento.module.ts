import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionMedicamentoComponent } from './gestion-medicamento.component';
import { GestionMedicamentoRoutingModule } from './gestion-medicamento-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GestionMedicamentoService } from './services/gestion-medicamento.service';



@NgModule({
  declarations: [
    GestionMedicamentoComponent
  ],
  imports: [
    CommonModule,
    GestionMedicamentoRoutingModule,
    SharedModule
  ],
  providers:[
    GestionMedicamentoService
  ]
})
export class GestionMedicamentoModule { }
