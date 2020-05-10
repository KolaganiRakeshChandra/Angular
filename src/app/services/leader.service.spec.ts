import { TestBed } from '@angular/core/testing';

import { LeaderService } from './leader.service';

describe('LeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [LeaderService]
  }));

  it('should be created', () => {
    const service: LeaderService = TestBed.get(LeaderService);
    expect(service).toBeTruthy();
  });
});
