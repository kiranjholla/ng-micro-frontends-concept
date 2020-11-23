import { TestBed } from '@angular/core/testing';

import { MicroAppConfigService } from './micro-app-config.service';

describe('MicroAppConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroAppConfigService = TestBed.get(MicroAppConfigService);
    expect(service).toBeTruthy();
  });
});
