import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsCardListContainerComponent } from './graphics-card-list-container.component';
import { GraphicsCardListContainerRoutingModule } from './graphics-card-list-container-routing.module';
import { GraphicsCardListElementComponent } from './components/graphics-card-list-element/graphics-card-list-element.component';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, GraphicsCardListContainerRoutingModule, MatCardModule, NgxPaginationModule, MatButtonModule, FlexLayoutModule],
  declarations: [GraphicsCardListContainerComponent, GraphicsCardListElementComponent]
})
export class GraphicsCardListContainerModule {}
