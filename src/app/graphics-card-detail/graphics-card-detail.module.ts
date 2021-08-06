import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsCardDetailRoutingModule } from './graphics-card-detail-routing.module';
import { GraphicsCardDetailComponent } from './graphics-card-detail.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [GraphicsCardDetailComponent],
  imports: [
    CommonModule,
    GraphicsCardDetailRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class GraphicsCardDetailModule { }
