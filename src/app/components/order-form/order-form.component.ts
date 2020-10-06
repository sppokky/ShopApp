import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  form: FormGroup;
  formSubscription: Subscription;

  ngOnInit(): void {
    this.form = this.getFormControls();

    this.formSubscription = this.form.valueChanges
      .subscribe((value) => {
        console.log(value);
        console.log(this.form.valid);
      });
  }

  getFormControls(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required]),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      street: new FormControl(''),
      zip: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      phone: new FormControl(''),
    }, { updateOn: 'blur' });
  }


  onSubmit(): void {
    console.log('on submit');
  }
}
