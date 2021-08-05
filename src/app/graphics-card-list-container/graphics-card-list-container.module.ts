import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsCardListContainerComponent } from './graphics-card-list-container.component';
import { GraphicsCardListContainerRoutingModule } from './graphics-card-list-container-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GraphicsCardListContainerRoutingModule
  ],
  declarations: [GraphicsCardListContainerComponent]
})
export class GraphicsCardListContainerModule { }
