import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GestionVentaServiceService } from './services/gestion-venta.service.service';
import { GestionMedicamentoService } from '../gestion-medicamento/services/gestion-medicamento.service';

@Component({
  selector: 'app-gestion-ventas',
  templateUrl: './gestion-ventas.component.html',
  styleUrls: ['./gestion-ventas.component.scss']
})
export class GestionVentasComponent implements OnInit {

  constructor(private fb: FormBuilder, private gestionVentaService: GestionVentaServiceService, private messageService: MessageService, private confirmationService: ConfirmationService, private gestionMedicamntoService: GestionMedicamentoService) { }
  ventas: any[] = [];
  filterVentaForm!: FormGroup;
  ventaForm!: FormGroup;
  rangeDates: Date[] | undefined;
  isEditar: boolean = false;
  visible: boolean = false;
  medicamentos = [];

  ngOnInit(): void {
    this.initForm();
    this.getVentas();
    this.getMedicamentos();
  }

  initForm(): void {
    this.filterVentaForm = this.fb.group({
      dates: [[]]
    })

    this.ventaForm = this.fb.group({
      producto: [null, [Validators.required]],
      cantidadActual: [{value: null, disabled: true}],
      cantidadVenta: [null, [Validators.required]]
    })
  }

  getMedicamentos(): void{
    this.gestionMedicamntoService.getAllMedicamentos({}).subscribe({
      next: (data) =>{
        this.medicamentos = data;
      }
    })
  }

  getVentas(): void {
    this.gestionVentaService.getAllVentas().subscribe({
      next: (data) => {
        this.ventas = data;
      }
    })
  }

  filterDates(): void {
    let params = this.gestionVentaService.getParams({
      dateStart: this.getFechaString(this.filterVentaForm.value?.dates[0]),
      dateEnd: this.getFechaString(this.filterVentaForm.value?.dates[1])
    })
    this.gestionVentaService.getVentasByDates(params).subscribe({
      next: (data) => {
        this.ventas = data;
      }
    })
  }

  getFechaString(date: Date): string | null {
    if(!date) return null;
    let m = date.getMonth() + 1;
    let month = m >= 10 ? m : "0" + m;
    let day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
    return  `${date.getFullYear()}-${month}-${day}`;
  }

  limpiar(){
    this.filterVentaForm.controls['dates'].setValue([]);
  }

  showModal(): void {
    this.ventaForm.reset();
    this.visible = true;
    this.isEditar = false;
  }

  closeModal(): void {
    this.visible = false;
  }

  changeProducto(event: any): void{
    this.ventaForm.controls['cantidadActual'].setValue(event.value.stock)
  }

  guardarVenta(){
    if (this.ventaForm.valid){

      let newCantidad = this.ventaForm.controls['cantidadActual'].value - this.ventaForm.controls['cantidadVenta'].value;
      if(newCantidad < 0){
        this.messageService.clear();
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No hay suficientes medicamentos para vender' });
      }else{

        let body = {
          sellDate: this.getFechaString(new Date()),
          medicineID: this.ventaForm.value.producto.id,
          amount: this.ventaForm.value.cantidadVenta,
          value: this.ventaForm.value.producto.value,
          total: this.ventaForm.value.cantidadVenta * this.ventaForm.value.producto.value
        }
    
        this.gestionVentaService.saveVenta(body).subscribe({
          next: (data) =>{
            this.getVentas();
            this.getMedicamentos();
            this.messageService.add({ severity: 'success', summary: 'Exito', detail: "Venta Exitosa" });
            this.closeModal();
          }
        })
      }

        

    }

  }


  
   
 

}
