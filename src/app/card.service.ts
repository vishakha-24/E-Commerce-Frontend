import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cartItems: any[] = [];

  constructor() {}

  // Add item to the cart with default quantity 1
  addToCart(product: any) {
    const existingProduct = this.cartItems.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;  // Increase quantity if the product is already in the cart
    } else {
      this.cartItems.push({ ...product, quantity: 1 });  // Add product with default quantity of 1
    }
  }

  // Update item quantity in the cart
  updateItemQuantity(index: number, quantity: number) {
    const item = this.cartItems[index];
    if (item) {
      item.quantity = quantity;  // Update quantity and recalculate price
    }
  }

  // Remove item from the cart
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  // Get total price of items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  // Get all items in the cart
  getCartItems() {
    return this.cartItems;
  }


  
}
