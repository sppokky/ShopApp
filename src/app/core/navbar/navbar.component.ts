import { Searchservice } from './../../services/search.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  form: FormGroup;
  constructor(private searchService: Searchservice, private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup(
      {search: new FormControl('')}
    )}
    onSubmit() {
      this.searchService.setSearchValue(this.form.get('search').value);
      this.router.navigate(['search']);
      console.log('submit');
      
    }
}
