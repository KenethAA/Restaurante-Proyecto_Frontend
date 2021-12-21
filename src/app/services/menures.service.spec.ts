import { TestBed } from '@angular/core/testing';

import { MenuresService } from './menures.service';

describe('MenuresService', () => {
  let service: MenuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
