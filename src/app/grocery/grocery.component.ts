import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-grocery',
  standalone: false,
  
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {
  
  objectKeys = Object.keys;
  categories = [
    { 
      name: 'Grocery', 
      products: [
        { 
          name: 'Rice', 
          price: 50, 
          image: 'https://www.jiomart.com/images/product/original/490984316/india-gate-regular-choice-basmati-rice-5-kg-product-images-o490984316-p490984316-0-202411271349.jpg?im=Resize=(360,360)',
          details: { brand: 'Fortune', weight: '1kg', type: 'Basmati', offers: '10% off' }
        },
        { 
          name: 'Wheat', 
          price: 40, 
          image: 'https://www.jiomart.com/images/product/original/491598791/good-life-sharbati-wheat-5-kg-product-images-o491598791-p491598791-0-202404221630.jpg?im=Resize=(360,360)',
          details: { brand: 'Aashirvaad', weight: '5kg', type: 'Whole Wheat', offers: 'Flat ₹20 off' }
        },
        { 
          name: 'Salt', 
          price: 50, 
          image: 'https://www.jiomart.com/images/product/original/492340155/tata-superlite-salt-1-kg-product-images-o492340155-p590332613-0-202212052002.jpg?im=Resize=(360,360)',
          details: { brand: 'Fortune', weight: '1kg', type: 'Basmati', offers: '10% off' }
        },

        { 
          name: 'Sugar', 
          price: 50, 
          image: 'https://www.jiomart.com/images/product/original/490861956/madhur-pure-hygienic-sugar-5-kg-product-images-o490861956-p490861956-0-202208221852.jpg?im=Resize=(360,360)',
          details: { brand: 'Fortune', weight: '1kg', offers: '10% off' }
        },
        { 
          name: 'Cooking Oil', 
          price: 180, 
          image: 'https://www.jiomart.com/images/product/original/490005648/saffola-gold-multisource-blended-refined-edible-oil-5-l-can-1-l-free-pouch-product-images-o490005648-p490005648-0-202407121730.jpg?im=Resize=(360,360)',
          details: { brand: 'Saffola', weight: '1L', offers: '5% off' }
        },
        { 
          name: 'Tea', 
          price: 120, 
          image: 'https://www.jiomart.com/images/product/original/490001341/tata-gold-leaf-tea-500-g-product-images-o490001341-p490001341-0-202408012311.jpg?im=Resize=(360,360)',
          details: { brand: 'Tata', weight: '500g', offers: 'Flat ₹30 off' }
        },
        { 
          name: 'Coffee', 
          price: 200, 
          image: 'https://www.jiomart.com/images/product/original/490004155/nescafe-classic-instant-coffee-45-g-product-images-o490004155-p490004155-0-202309041728.jpg?im=Resize=(360,360)',
          details: { brand: 'Nescafe', weight: '500g', offers: '15% off' }
        },
        { 
          name: 'Flour', 
          price: 40, 
          image: 'https://www.jiomart.com/images/product/original/490750662/aashirvaad-superior-mp-atta-10-kg-product-images-o490750662-p590150649-0-202401260852.jpg?im=Resize=(360,360)',
          details: { brand: 'Aashirvaad', weight: '1kg', offers: 'Buy 1 Get 1 Free' }
        }
      ]
    },
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
