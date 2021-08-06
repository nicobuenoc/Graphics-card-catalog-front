import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GraphicsCardListEffects } from './graphics-card-list.effects';

describe('GraphicsCardListEffects', () => {
  let actions$: Observable<any>;
  let effects: GraphicsCardListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GraphicsCardListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GraphicsCardListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
