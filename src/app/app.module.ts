import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule} from './core/core.module';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NgModule, Component } from '@angular/core';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { ProductsComponent } from './containers/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { CartItemsComponent } from './containers/cart-items/cart-items.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchResultComponent } from './components/search-result/search-result.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ProductComponent,
    ProductsComponent,
    PageNotFoundComponent,
    OrderFormComponent,
    CartItemsComponent,
    CartItemComponent,
    SearchResultsComponent,
    SearchResultComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
