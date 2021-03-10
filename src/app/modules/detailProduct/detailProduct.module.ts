import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { SharedModule } from '@shared/shared.module';


import { DetailProductComponent } from "@modules/detailProduct/pages/detailProduct.component";
import { ContentProductComponent } from '@modules/detailProduct/components/contentProduct/contentProduct.component';
import { InfoProductComponent } from '@modules/detailProduct/components/info-product/info-product.component'

@NgModule({
  declarations: [
    DetailProductComponent,
    ContentProductComponent,
    InfoProductComponent
  ],
  exports: [
    DetailProductComponent,
    ContentProductComponent,
    InfoProductComponent
  ],
  imports:[
    CommonModule,
    SharedModule
  ],
  providers: []
})
export class DetailProductModule {}
