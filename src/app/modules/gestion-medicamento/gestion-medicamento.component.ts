import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestionMedicamentoService } from './services/gestion-medicamento.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-gestion-medicamento',
  templateUrl: './gestion-medicamento.component.html',
  styleUrls: ['./gestion-medicamento.component.scss']
})
export class GestionMedicamentoComponent implements OnInit {
  constructor(private fb: FormBuilder, private gestionMedicamentoApiService: GestionMedicamentoService, private confirmationService: ConfirmationService, private messageService: MessageService) { }
  medicamentos: any[] = []
  isEditar: boolean = false;
  visible: boolean = false;
  medicamentoForm!: FormGroup;
  filterForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
    this.getMedicamentos();
  }


  showModal(): void {
    this.medicamentoForm.reset();
    this.visible = true;
    this.isEditar = false;
  }

  closeModal(): void {
    this.visible = false;
  }

  initForm(): void {
    this.medicamentoForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      laboratory: [null, [Validators.required]],
      production_date: [null, [Validators.required]],
      expiration_date: [null, [Validators.required]],
      stock: [null, [Validators.required]],
      value: [null, [Validators.required]]
    })

    this.filterForm = this.fb.group({
        name: [null]
    })


  }

  getMedicamentos(): void {
    let param = this.gestionMedicamentoApiService.getParams(this.filterForm.value)
    this.gestionMedicamentoApiService.getAllMedicamentos(param).subscribe({
      next: (data) => {
        this.medicamentos = data;
      }
    })
  }

  botonForm(): void {
    if (this.medicamentoForm.valid) {
      let __api = this.isEditar ? this.gestionMedicamentoApiService.updateMedicamentos(this.medicamentoForm.value) : this.gestionMedicamentoApiService.postMedicamentos(this.medicamentoForm.value)
      __api.subscribe({
        next: (data) => {
          this.getMedicamentos();
          this.messageService.add({ severity: 'success', summary: 'Exito', detail: `Se ha ${this.isEditar ? 'actualizado' : 'creado'} correctamente` });
          this.closeModal();
        }
      })
    }
  }


  edit(id: number): void {
    const medicamento = this.medicamentos.find((value) => value.id === id);
    this.isEditar = true;
    this.visible = true;
    this.medicamentoForm.controls['id'].setValue(medicamento.id);
    this.medicamentoForm.controls['name'].setValue(medicamento.name);
    this.medicamentoForm.controls['laboratory'].setValue(medicamento.laboratory);
    this.medicamentoForm.controls['production_date'].setValue(new Date(medicamento.production_date + 'T00:00:00'));
    this.medicamentoForm.controls['expiration_date'].setValue(new Date(medicamento.expiration_date + 'T00:00:00'));
    this.medicamentoForm.controls['stock'].setValue(medicamento.stock);
    this.medicamentoForm.controls['value'].setValue(medicamento.value);

  }

  delete(id: number): void {

    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",

      accept: () => {
        this.gestionMedicamentoApiService.deleteMedicamentos(id).subscribe({
          next: (data) => {
            this.getMedicamentos();
            this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Se ha eliminado con exito' });
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Erorr', detail: 'No se ha podido eliminar' });
          }
        })
      },

    });
  }

  filter(): void {
     this.getMedicamentos()

  }


}
