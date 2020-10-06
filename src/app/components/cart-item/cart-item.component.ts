import { Product } from 'src/models/product.interaface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() cartItem: Product;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  deleteFromCart(id: number): void {
    this.onDelete.emit(id);
  }
}
