import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphicsCardDetailComponent } from './graphics-card-detail.component';

const routes: Routes = [
  {
    path: '',
    component: GraphicsCardDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsCardDetailRoutingModule {}
