import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMedicamentoComponent } from './gestion-medicamento.component';

describe('GestionMedicamentoComponent', () => {
  let component: GestionMedicamentoComponent;
  let fixture: ComponentFixture<GestionMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
