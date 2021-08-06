import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphicsCardListContainerComponent } from './graphics-card-list-container.component';


const routes: Routes = [
  {
    path: '',
    component: GraphicsCardListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsCardListContainerRoutingModule { }
