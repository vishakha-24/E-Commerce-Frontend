import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  standalone: false,
  
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {
  order = {
    name: '',
    mobile: '',
    address: '',
    paymentMethod: ''
  };

  constructor(private http: HttpClient,private router: Router) {}

  placeOrder(orderForm: any): void {
    if (orderForm.valid) {
      this.http.post('http://localhost:9090/orders/add', this.order).subscribe(
        (response) => {
          alert('Order placed successfully!');
          this.router.navigate(['/my-orders']);
          orderForm.resetForm();
        },
        (error) => {
          alert('Failed to place the order.');
          console.error(error);
        }
      );
    }
  }
}
