import { Component, Input } from '@angular/core';
import { Product } from 'src/models/product.interaface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent{
  @Input() product: Product;
  



}
