import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionMedicamentoComponent } from './gestion-medicamento.component';

 
const routes: Routes = [
  {
    path: "",
   component: GestionMedicamentoComponent
  },
  
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionMedicamentoRoutingModule { }
 