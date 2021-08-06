import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { GraphicsCardListReducer } from './graphics-card-list/reducers/graphics-card-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { GraphicsCardListEffects } from './graphics-card-list/effects/graphics-card-list.effects';

const reducers: ActionReducerMap<any> = {
  graphicsCardList: GraphicsCardListReducer
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([GraphicsCardListEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ]
})
export class AppStoreModule {}
