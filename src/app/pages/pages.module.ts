import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WomenComponent } from './women/women.component';
import { ComponentsModule } from '../components/components.module';

const pages = [
  CartComponent,
  DetailsComponent,
  HomeComponent,
  MenComponent,
  NotFoundComponent,
  WishlistComponent,
  WomenComponent
]

@NgModule({
  declarations: [pages],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    pages
  ]
})
export class PagesModule { }
