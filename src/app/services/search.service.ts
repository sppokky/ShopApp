import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Searchservice {
  private results: Subject<string> = new Subject<string>();
  results$: Observable<string> = this.results.asObservable();

  setSearchValue(value: string){
    this.results.next(value);

  }
}
