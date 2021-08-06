import { createReducer, on } from '@ngrx/store';
import { GraphicCard } from 'src/app/core/models/graphic-card.model';
import * as GraphicsCardListActions from './../actions/graphics-card-list.actions';

export const initialGraphicsCardList: GraphicCard[] = null;

const _graphicsCardListReducer = createReducer(
  initialGraphicsCardList,
  on(GraphicsCardListActions.setGraphicsCardList, (state, { graphicsCardList }) => {
    return graphicsCardList;
  })
);

export function GraphicsCardListReducer(state, action): GraphicCard[] {
  return _graphicsCardListReducer(state, action);
}
