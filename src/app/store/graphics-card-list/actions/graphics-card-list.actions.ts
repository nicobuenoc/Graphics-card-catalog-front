import { createAction, props } from '@ngrx/store';
import { GraphicCard } from 'src/app/core/models/graphic-card.model';

export const loadGraphicsCardList = createAction('[Ships] Load GraphicsCardList');

export const setGraphicsCardList  = createAction('[Ships] Set GraphicsCardList', props<{ graphicsCardList: GraphicCard[] }>());




