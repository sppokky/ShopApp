import { Product } from './../../models/product.interaface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProductApiService {
  url = 'assets/data/spirits.json';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}`);
  }
  getProduct(id: number): Observable<Product> {
    return this.getProducts()
      .pipe(
        map((res: Product[]) => res.find(product => product.id === id)));
  }
}
 