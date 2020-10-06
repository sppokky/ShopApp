import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/models/product.interaface';
import { take } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  cartItems$: Observable<Product[]> = this.cartItems.asObservable();

  addItem(item: Product): void{
    this.cartItems$
      .pipe(take(1))
      .subscribe((cartItems: Product[]) => {
        this.cartItems.next([...cartItems, item]);
      });
  }

  deleteItem(id: number, count = 1): void {
    this.cartItems$
      .pipe(take(1))
      .subscribe((cartItems: Product[]) => {
        const newItems = _.cloneDeep(cartItems)
          .filter((item: Product) => item.id !== id);
        const deleteIdItems = _.cloneDeep(cartItems)
          .filter((item: Product) => item.id === id);
        if (deleteIdItems.length === 1) {
          this.cartItems.next(newItems);
        }
        else {
          this.cartItems.next([...newItems, ...deleteIdItems.splice(0, count)]);
          console.log(deleteIdItems.splice(0, count));
        }
      });
  }
}
