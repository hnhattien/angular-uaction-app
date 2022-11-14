import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { _404Component } from './_404.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'product/:id', component: ProductDetailComponent,
    children: [
      {
        path: '', component: ProductDetailComponent
      },
      {
        path: 'seller/:id', component: SellerInfoComponent
      }
    ]
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '**', component: _404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
