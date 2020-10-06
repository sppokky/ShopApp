import { Product } from 'src/models/product.interaface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  cartItems$: Observable<Product[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$.pipe(tap(res => {
      console.log(res);
    }));
  }

  handleDelete(id: number) {
    this.cartService.deleteItem(id);
  }
}
