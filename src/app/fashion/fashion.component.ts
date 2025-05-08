import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-fashion',
  standalone: false,
  
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css'
})
export class FashionComponent {
  objectKeys = Object.keys;
  categories = [
    {
      name: 'Fashion',
      products: [
        { 
          name: 'T-shirt', 
          price: 3599, 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83lWycfB0P7_kf3AV3blQ1albNQAfSPf19A&s',
          details: { fabric: 'Cotton', color: 'Yellow', size: 'S, M, L, XL', offers: 'Buy 2 Get 1 Free' }
        },
        { 
          name: 'Jeans', 
          price: 2599, 
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSYVqcb_H_93KAodtCr-HX-LVAuJysq8jHfq_jrfckhKR4bQ5JHUyUZG0tlgoWbRvwPEQcXfdwsjPPXMVEwu5CASG-K1DwFNG7i09_iRBBKfNAf_arrLpVyWG9YCjDnI7xgeK19O2ZKCA&usqp=CAc',
          details: { fabric: 'Cotton', color: 'Aqua', size: 'S, M, L, XL', offers: 'Buy 2 Get 1 Free' }
        },
        { 
          name: 'Jacket', 
          price: 1599, 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2JroQ88uBz09J1v8g0pg96ch2FNivXb4KA&s',
          details: { fabric: 'Cotton', color: 'Light Blue', size: 'S, M, L, XL', offers: 'Buy 2 Get 1 Free' }
        },
        { 
          name: 'Shoes', 
          price: 799, 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRyD564awLBNGBWzlg5wOVNhZPN5rL68A3g&s',
          details: { fabric: 'Cotton', color: 'Red', size: 'S, M, L, XL', offers: 'Buy 2 Get 1 Free' }
        },
        // Additional Products
        {
          name: 'Sweater', 
          price: 2199, 
          image: 'https://www.jiomart.com/images/product/original/442307302_ltblue/women-ribbed-round-neck-pullover-model-442307302_ltblue-0-202411291301.jpg?im=Resize=(330,410)',
          details: { fabric: 'Wool', color: 'Grey', size: 'S, M, L, XL', offers: 'Flat 10% off' }
        },
        {
          name: 'Scarf', 
          price: 999, 
          image: 'https://www.jiomart.com/images/product/original/rvqqwggknd/stolevilla-women-s-printed-chiffon-multicolored-scarf-and-stoles-with-tassels-set-of-2-product-images-rvqqwggknd-0-202206010233.jpg?im=Resize=(330,410)',
          details: { fabric: 'Cotton', color: 'Beige', size: 'One Size', offers: 'Buy 1 Get 1 Free' }
        },
        {
          name: 'Hat', 
          price: 799, 
          image: 'https://www.jiomart.com/images/product/original/rv633ueevn/glamaxy-imported-unisex-snow-proof-woolen-cap-inside-fur-warm-winter-soft-beanie-cap-black-product-images-rv633ueevn-0-202211291728.jpg?im=Resize=(330,410)',
          details: { fabric: 'Felt', color: 'Black', size: 'One Size', offers: 'Flat 20% off' }
        },
        {
          name: 'Belt', 
          price: 1299, 
          image: 'https://www.jiomart.com/images/product/original/rvxgozpdfb/kastner-combo-of-two-trandig-belts-product-images-rvxgozpdfb-0-202212311753.jpg?im=Resize=(330,410)',
          details: { fabric: 'Leather', color: 'Brown', size: 'One Size', offers: 'Flat 15% off' }
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
