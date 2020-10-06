import { SearchResultsComponent } from './components/search-results/search-results.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ProductsComponent } from './containers/products/products.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { CartItemsComponent } from './containers/cart-items/cart-items.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'main-page', component: MainpageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartItemsComponent },
  { path: 'order-form', component: OrderFormComponent },
  { path: 'search', component: SearchResultsComponent},
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
