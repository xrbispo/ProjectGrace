import { TestBed, inject } from '@angular/core/testing';

import { VcenterService } from './vcenter.service';

describe('VcenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VcenterService]
    });
  });

  it('should be created', inject([VcenterService], (service: VcenterService) => {
    expect(service).toBeTruthy();
  }));
});
