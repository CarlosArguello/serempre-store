import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"

import { ContainerComponent } from "@app/shared/components/container/container.component"
import { NavBarComponent } from '@app/shared/components/navbar/navbar.component';
import { WatchProductComponent } from '@shared/components/watch-product/watch-product.component';
import { ContentDetailLayout } from '@shared/layouts/contentDetail/contentDetail.component.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { ContentArticleComponent } from '@shared/components/contentArticle/contentArticle.component';
import { InteractiveButtonComponent } from '@shared/components/interactiveButton/interactiveButton.component';
import { HeadingComponent } from '@shared/components/heading/heading.component';
import { ContentAlignComponent } from '@app/shared/components/contentAlign/contentAlign.component';
import { ListItemComponent } from '@shared/components/listItem/listItem.component';
import { ContentTabComponent } from '@shared/components/contentTab/contentTab.component';

@NgModule({
  declarations: [
    ContainerComponent,
    NavBarComponent,
    WatchProductComponent,
    ContentDetailLayout,
    FooterComponent,
    ContentArticleComponent,
    InteractiveButtonComponent,
    HeadingComponent,
    ContentAlignComponent,
    ListItemComponent,
    ContentTabComponent
  ],
  exports: [
    ContainerComponent,
    NavBarComponent,
    WatchProductComponent,
    ContentDetailLayout,
    FooterComponent,
    ContentArticleComponent,
    InteractiveButtonComponent,
    HeadingComponent,
    ContentAlignComponent,
    ListItemComponent,
    ContentTabComponent
  ],
  imports:[
    CommonModule
  ],
  providers: []
})
export class SharedModule {}
