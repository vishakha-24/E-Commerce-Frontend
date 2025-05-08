import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-furniture',
  standalone: false,
  
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.css'
})
export class FurnitureComponent {
  
  objectKeys = Object.keys;
  categories = [
    
    { 
      name: 'Furniture', 
      products: [
        { 
          name: 'Sofa', 
          price: 15000, 
          image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTlZxzOsrYt1-xOcxMwrWnA3W1xYQ29nudPr52-VaU4RyxHaTLyh5ht7BIW15vP73xjEQ1zIeeSi290IRXRqfMuPw3rGNBj1NGSDmy8-Q0u7sPbP7ILyYdm4Q&usqp=CAc',
          details: { material: 'Wooden Frame', color: 'Beige', dimensions: '6x3 ft', offers: '10% Off' }
        },
        { 
          name: 'Dining Table', 
          price: 12000, 
          image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZ1fCjvLvrEFBJGgEzW9eNF-7xhnfbyGCFHi0076-0IAmtr6H2MXQFRsA_y3pXPXWWc2ebEG7KuVeH-5kc2U3rGk5kvpfzlxQ4Ph6zHF95EAcif7TcpgctgbjnpEbMB7WF7JBEgw&usqp=CAc',
          details: { material: 'Teak Wood', seats: 6, dimensions: '5x3 ft', offers: 'Free Chairs' }
        },
        { 
          name: 'Bed', 
          price: 80000, 
          image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDTSxws0Ki9HvYIJTCaNH8dc905IS_U0dg_HQ_RxTznJqvDY7ltUodiXrDrZp51NuSGbc-H-DIN7_0OJOoYMD5fU4aT05wztYwHLOBfsI&usqp=CAc',
          details: { material: 'Sheesham Wood', size: 'Queen', offers: 'Flat ₹1000 Off' }
        },
        { 
          name: 'Chair', 
          price: 2500, 
          image: 'data:image/jpeg;base64,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',
          details: { material: 'Plastic', color: 'Black', weightCapacity: '120 kg', offers: 'Buy 4 Get 1 Free' }
        },

        { 
          name: 'Coffee Table', 
          price: 5000, 
          image: 'https://www.jiomart.com/images/product/original/rvf4690hgh/urbain-home-peru-engineered-wood-coffee-table-tea-table-for-living-room-walnut-product-images-orvf4690hgh-p600866444-0-202304241511.jpg?im=Resize=(360,360)',
          details: { material: 'Glass Top, Wooden Legs', color: 'Brown', dimensions: '3x2 ft', offers: '15% Off' }
        },
        { 
          name: 'Armchair', 
          price: 8500, 
          image: 'https://www.jiomart.com/images/product/original/rvzsqtgosk/suryavanshi-sheesham-wood-arm-chair-elegant-teak-wood-finish-with-letherate-cushioning-comfort-and-style-combined-product-images-orvzsqtgosk-p606638087-0-202312091555.jpg?im=Resize=(360,360)',
          details: { material: 'Fabric, Wooden Frame', color: 'Gray', dimensions: '2.5x3 ft', offers: '10% Off' }
        },
        { 
          name: 'Bookshelf', 
          price: 15000, 
          image: 'https://www.jiomart.com/images/product/original/rvlt39c3aw/dazzy-collapsible-bookshelf-stand-portable-books-case-multi-organiser-shelves-portable-bookcase-black-9-layer-product-images-orvlt39c3aw-p608497025-0-202403191606.jpg?im=Resize=(360,360)',
          details: { material: 'MDF Wood', color: 'Natural', dimensions: '5x4 ft', offers: 'Free Installation' }
        },
        { 
          name: 'Study Table', 
          price: 15000, 
          image: 'https://images.durian.in/Durian/durian/product/800x800/product_2022100611311665055883_99011.jpg?tr=w-938,q-100,pr-true',
          details: { material: 'MDF Wood', color: 'Natural', dimensions: '5x4 ft', offers: 'Free Installation' }
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
