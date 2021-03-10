import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from '@modules/detailProduct/pages/detailProduct.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/detail-product'
  },
  {
    path: 'detail-product',
    component: DetailProductComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
