/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardListService } from './card-list.service';

describe('Service: CardList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardListService]
    });
  });

  it('should ...', inject([CardListService], (service: CardListService) => {
    expect(service).toBeTruthy();
  }));
});
