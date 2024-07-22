import { TestBed } from '@angular/core/testing';

import { GestionMedicamentoService } from './gestion-medicamento.service';

describe('GestionMedicamentoService', () => {
  let service: GestionMedicamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionMedicamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
