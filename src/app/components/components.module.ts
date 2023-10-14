import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { CategoryHeaderComponent } from './category-header/category-header.component';
import { PromotionBannerComponent } from './promotion-banner/promotion-banner.component';
import { ClothesComponent } from './clothes/clothes.component';
import { FooterComponent } from './footer/footer.component';
import { SearchClothesComponent } from './search-clothes/search-clothes.component';
import { DetailsComponent } from './details/details.component';
import { YouMayLikeComponent } from './you-may-like/you-may-like.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewComponent } from './review/review.component';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { HttpClientModule } from '@angular/common/http';

const components = [
  CardComponent,
  HeaderComponent,
  CategoryHeaderComponent,
  PromotionBannerComponent,
  ClothesComponent,
  FooterComponent,
  SearchClothesComponent,
  DetailsComponent,
  YouMayLikeComponent,
  ReviewsComponent,
  ReviewComponent,
  SvgIconComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    components
  ]
})
export class ComponentsModule { }
