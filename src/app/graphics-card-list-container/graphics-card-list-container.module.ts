import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsCardListContainerComponent } from './graphics-card-list-container.component';
import { GraphicsCardListContainerRoutingModule } from './graphics-card-list-container-routing.module';
import { GraphicsCardListElementComponent } from './components/graphics-card-list-element/graphics-card-list-element.component';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    GraphicsCardListContainerRoutingModule,
    MatCardModule,
    NgxPaginationModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [GraphicsCardListContainerComponent, GraphicsCardListElementComponent]
})
export class GraphicsCardListContainerModule {}
