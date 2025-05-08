import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-mobile',
  standalone: false,
  
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileComponent {

  objectKeys = Object.keys;
  categories = [
    { 
      name: 'Mobiles', 
      products: [
        { 
          name: 'iPhone 15', 
          price: 74999, 
          image: 'https://www.jiomart.com/images/product/original/493839317/apple-iphone-15-256gb-blue-digital-o493839317-p604568795-0-202309141654.jpeg?im=Resize=(360,360)',
          details: { 
            brand: 'Apple', 
            storage: '256GB', 
            color: 'Silver', 
            offers: 'Exchange Bonus up to ₹10,000' 
          }
        },
        { 
          name: 'Samsung GalaxyS23', 
          price: 64999, 
          image: 'https://www.jiomart.com/images/product/original/494352155/samsung-s24-ultra-5g-256-gb-12-gb-ram-titanium-gray-mobile-phone-digital-o494352155-p607431343-0-202401191128.jpeg?im=Resize=(360,360)',
          details: { 
            brand: 'Samsung', 
            storage: '512GB', 
            color: 'Phantom Black', 
            offers: 'Flat ₹5,000 Cashback' 
          }
        },
        { 
          name: 'OnePlus 11', 
          price: 54999, 
          image: 'https://www.jiomart.com/images/product/original/493666101/op-nord-ce-3-lite-128-gb-8-gb-ram-chromatic-grey-mobile-phone-digital-o493666101-p608711332-0-202404091704.jpeg?im=Resize=(360,360)',
          details: { 
            brand: 'OnePlus', 
            storage: '128GB', 
            color: 'Green', 
            offers: 'No-Cost EMI for 6 months' 
          }
        },
        { 
          name: 'Xiaomi Mi 13', 
          price: 29999, 
          image: 'https://www.jiomart.com/images/product/original/494422870/redmi-a3x-64-gb-4-gb-ram-black-mobile-phone-digital-o494422870-p609898418-0-202409041003.jpeg?im=Resize=(360,360)',
          details: { 
            brand: 'Xiaomi', 
            storage: '128GB', 
            color: 'Blue', 
            offers: 'Flat ₹2,000 off' 
          }
        },
        { 
          name: 'Realme GT 2 Pro',
          price: 35999,
          image: 'https://www.jiomart.com/images/product/original/rvhxtn7d4o/realme-12x-5g-6gb-ram-128gb-rom-woodland-green-smartphone-product-images-orvhxtn7d4o-p608687567-0-202404151838.jpg?im=Resize=(360,360)',
          details: { 
            brand: 'Realme',
            storage: '256GB',
            color: 'Neo Green',
            offers: 'Flat ₹3,000 off'
          }
        },
        { 
          name: 'Vivo X90 Pro',
          price: 82999,
          image: 'https://www.jiomart.com/images/product/original/494422254/vivo-v40-pro-5g-256-gb-8-gb-ram-ganges-blue-mobile-phone-digital-o494422254-p609664999-0-202408071745.jpeg?im=Resize=(360,360)',
          details: { 
            brand: 'Vivo',
            storage: '256GB',
            color: 'Astro Black',
            offers: '10% Cashback'
          }
        },
        { 
          name: 'Oppo Reno 12 Pro',
          price: 39999,
          image: 'https://www.jiomart.com/images/product/original/494421811/oppo-reno-12-pro-5g-256-gb-12-gb-ram-sunset-gold-mobile-phone-digital-o494421811-p609484228-0-202407101151.jpeg?im=Resize=(360,360)',
          details: { 
            brand: 'Oppo',
            storage: '256GB',
            color: 'Glowing Gold',
            offers: '5% off on exchange'
          }
        },
        { 
          name: 'Google Pixel 8',
          price: 69999,
          image: 'https://www.jiomart.com/images/product/original/494422654/google-pixel-7-128-gb-8-gb-ram-lemongrass-mobile-phone-digital-o494422654-p609976013-0-202409171550.jpeg?im=Resize=(360,360)',
          details: { 
            brand: 'Google',
            storage: '256GB',
            color: 'Charcoal',
            offers: 'Free Google Nest Hub with purchase'
          }
        }
      ]
    }
  ];

  selectedCategory: any = null;
  selectedProduct: any = null;
  showCategories: boolean = true;
  quantity: number = 1;

  constructor(private cartService: CardService) { }  // Inject CartService

  showProductDetails(product: any) {
    this.selectedProduct = product;
    this.selectedCategory = null; // Hide category when product is selected
    this.showCategories = false; // Hide category section
  }

  closeProductDetails() {
    this.selectedProduct = null;
    this.showCategories = true;
  }

  orderProduct(product: any) {
    const totalPrice = product.price * this.quantity;
    alert(`You have ordered ${this.quantity} ${product.name}(s) for ₹${totalPrice}`);
  }

  goBack() {
    this.selectedProduct = null;
    this.showCategories = true;
    this.quantity = 1;
  }

  toggleWishlist(product: any) {
    product.liked = !product.liked;
    if (product.liked) {
      alert(`${product.name} has been added to your wishlist!`);
    } else {
      alert(`${product.name} has been removed from your wishlist!`);
    }
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);  // Add product to the cart using CartService
    alert(`${product.name} has been added to your cart!`);
  }

}
