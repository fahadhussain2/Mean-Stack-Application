/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HutsService } from './huts.service';

describe('HutsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HutsService]
    });
  });

  it('should ...', inject([HutsService], (service: HutsService) => {
    expect(service).toBeTruthy();
  }));
});
