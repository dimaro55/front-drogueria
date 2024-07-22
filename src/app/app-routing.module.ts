import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 
const routes: Routes = [
  {
    path: "gestion-medicamento",
    loadChildren: () => import('./modules/gestion-medicamento/gestion-medicamento.module').then(m => m.GestionMedicamentoModule)
  },
  {
    path:"gestion-venta",
    loadChildren: () => import('./modules/gestion-ventas/gestion-ventas.module').then(m => m.GestionVentasModule)
  },
  
  {
    path: '',
    redirectTo: "gestion-medicamento",
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: "gestion-medicamento",
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 