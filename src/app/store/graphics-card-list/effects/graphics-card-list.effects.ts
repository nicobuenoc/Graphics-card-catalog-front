import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { GraphicCard } from 'src/app/core/models/graphic-card.model';
import { GraphicsCardListService } from 'src/app/core/services/graphics-card-list/graphics-card-list.service';
import * as GraphicsCardListActions from './../actions/graphics-card-list.actions';

@Injectable()
export class GraphicsCardListEffects {
  setAccountSettlement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GraphicsCardListActions.loadGraphicsCardList),
      exhaustMap((action: any) =>
        this.graphicsCardListService
          .getGraphicsCardList()
          .pipe(map((graphicsCardList: GraphicCard[]) => GraphicsCardListActions.setGraphicsCardList({ graphicsCardList })))
      )
    )
  );

  constructor(private actions$: Actions, private graphicsCardListService: GraphicsCardListService) {}
}
