import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar'
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    CalendarModule,
    ToastModule,
    DropdownModule
  ],
  exports: [
    InputTextModule, 
    ButtonModule, 
    TableModule, 
    DialogModule, 
    CalendarModule,
    ConfirmDialogModule,
    ToastModule,
    DropdownModule
  ], 
  providers:[
    ConfirmationService,
    MessageService
  ]
})

export class PrimengModule { }
