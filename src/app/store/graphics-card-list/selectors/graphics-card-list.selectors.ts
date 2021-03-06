import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GraphicCard } from 'src/app/core/models/graphic-card.model';

const selectGraphicsCardList = createFeatureSelector<GraphicCard[]>('graphicsCardList');

export const selectGraphicCard = createSelector(selectGraphicsCardList, (state: GraphicCard[], id: number) =>
  state?.find((graficCard) => graficCard.id === id)
);

export const graphicsCardListFilter = createSelector(selectGraphicsCardList, (state: GraphicCard[], filter: string) => {
  if (filter) {
    return state?.filter((graficCard) => graficCard.name.toLowerCase().includes(filter?.toLowerCase()));
  } else {
    return state;
  }
});
