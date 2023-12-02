import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {OrderListComponent} from "./order-list/order-list.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'products', component: ProductsComponent},
      {path: 'product-details', component: ProductDetailsComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'order-list', component: OrderListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
