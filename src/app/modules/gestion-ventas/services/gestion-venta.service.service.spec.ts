import { TestBed } from '@angular/core/testing';

import { GestionVentaServiceService } from './gestion-venta.service.service';

describe('GestionVentaServiceService', () => {
  let service: GestionVentaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionVentaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
