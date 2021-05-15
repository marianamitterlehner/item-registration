import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent {

  recordForm = this.fb.group({
    nameItem: ['', Validators.required],
    unitMeasurement: [''],
    quantity: [''],
    price: [''],
    perishableProduct: [''],
    validityData : [''],
    dateManufacture: [''],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.warn(this.recordForm.value);
  }
}

