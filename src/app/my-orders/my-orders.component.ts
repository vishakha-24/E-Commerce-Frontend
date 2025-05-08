import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  standalone: false,
  
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent {
  orders = [
    { orderId: 'ORD001', 'Your name': 'Mobile Number','Your Address': 'Total price: 15000', 'status': 'Delivered' },
    { orderId: 'ORD002', 'Your name': 'Mobile Number','Your Address': 'Total price: 50000', 'status': 'Shipped' },
    { orderId: 'ORD003', 'Your name': 'Mobile Number','Your Address': 'Total price: 3000', 'status': 'processing' }, 
    { orderId: 'ORD004','Your name': 'Mobile Number','Your Address': 'Total price: 3000', 'status': 'Delivered' },
    { orderId: 'ORD005','Your name': 'Mobile Number','Your Address': 'Total price: 15000', 'status': 'Cancelled' },
  ];
}
