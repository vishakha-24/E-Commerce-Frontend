import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cartItems: any[] = [];

  constructor(private cartService: CardService) {}

  ngOnInit() {
    // Get the cart items when the component is initialized
    this.cartItems = this.cartService.getCartItems();
  }

  // Remove item from the cart
  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems();  // Update cart items
  }

    // Update quantity of the cart item
    updateQuantity(index: number, quantity: number) {
      if (quantity < 1) {
        quantity = 1; // Ensure quantity can't be less than 1
      }
      this.cartService.updateItemQuantity(index, quantity);
      this.cartItems = this.cartService.getCartItems();  // Update cart items after changing quantity
    }

  // Get total price of items in the cart
  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }


}
