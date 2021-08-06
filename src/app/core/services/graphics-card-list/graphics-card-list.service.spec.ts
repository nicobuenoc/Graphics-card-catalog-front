/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GraphicsCardListService } from './graphics-card-list.service';

describe('Service: GraphicsCardList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphicsCardListService]
    });
  });

  it('should ...', inject([GraphicsCardListService], (service: GraphicsCardListService) => {
    expect(service).toBeTruthy();
  }));
});
