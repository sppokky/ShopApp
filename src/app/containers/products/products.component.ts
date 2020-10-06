import { Product } from 'src/models/product.interaface';
import { ProductApiService } from './../../services/product-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(
    private ProductApiService: ProductApiService,
    private cartService: CartService,
  ) { }
  ngOnInit(): void {
    this.products = this.ProductApiService.getProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addItem(product);
  }

  deleteFromCart(id: number): void {
    this.cartService.deleteItem(id);
  }
}
