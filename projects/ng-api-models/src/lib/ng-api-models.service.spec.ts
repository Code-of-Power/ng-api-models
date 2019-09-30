import { TestBed } from '@angular/core/testing';

import { NgApiModelsService } from './ng-api-models.service';

describe('NgApiModelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgApiModelsService = TestBed.get(NgApiModelsService);
    expect(service).toBeTruthy();
  });
});
