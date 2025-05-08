import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell',
  standalone: false,
  
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.css'
})
export class SellComponent {

  sellForm: FormGroup;
  categories: string[] = ['Grocery', 'Mobiles', 'Fashion', 'Electronics', 'Furniture', 'Medicines'];

  constructor(private router: Router, private http: HttpClient) {
    this.sellForm = new FormGroup({
      productName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
      companyName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
  }

  get f() {
    return this.sellForm.controls;
  }

  onSubmit() {
    if (this.sellForm.invalid) {
      return;
    }

    const productData = this.sellForm.value;

    this.http.post('http://localhost:9090/product/sell', productData).subscribe({
      next: () => {
        alert('Product Sell Successfully!!');
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('An error occurred while selling the product.');
      },
    });
  }
  }



