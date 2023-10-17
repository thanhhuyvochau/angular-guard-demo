import { TestBed } from '@angular/core/testing';

import { CheckInGuard } from './check-in.guard';

describe('CheckInGuard', () => {
  let guard: CheckInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
