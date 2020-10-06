import { map, tap } from 'rxjs/operators';
import { ProductApiService } from './../../services/product-api.service';
import { Subscription, combineLatest, Observable} from 'rxjs';
import { Searchservice } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.interaface';




@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})


export class SearchResultsComponent implements OnInit {
  filteredProducts: Observable<Product[]>;
  searchResult: Subscription;
  constructor(private searchService: Searchservice, private apiService: ProductApiService) { }

  ngOnInit(): void {
    
    this.filteredProducts = combineLatest([
      this.searchService.results$, this.apiService.getProducts(),
    ])
    .pipe(tap((res)=> console.log(res)),
      map(([key, products])=> products.filter(product => product.title.toLowerCase().includes(key))))
  }



}
