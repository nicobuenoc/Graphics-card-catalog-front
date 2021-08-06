import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'graphics-cards',
    loadChildren: () =>
      import(`./graphics-card-list-container/graphics-card-list-container.module`).then((m) => m.GraphicsCardListContainerModule)
  },
  {
    path: 'graphics-cards/:id',
    loadChildren: () => import(`./graphics-card-detail/graphics-card-detail.module`).then((m) => m.GraphicsCardDetailModule)
  },
  {
    path: '**',
    redirectTo: 'graphics-cards'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
