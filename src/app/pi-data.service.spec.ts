/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PiDataService } from './pi-data.service';

describe('PiDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PiDataService]
    });
  });

  it('should ...', inject([PiDataService], (service: PiDataService) => {
    expect(service).toBeTruthy();
  }));
});
