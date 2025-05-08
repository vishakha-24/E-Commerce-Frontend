import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-homeappliences',
  standalone: false,
  
  templateUrl: './homeappliences.component.html',
  styleUrl: './homeappliences.component.css'
})
export class HomeappliencesComponent {
  objectKeys = Object.keys;
  categories = [
    
    { 
      name: 'Home Appliences', 
      products: [
        { 
          name: 'Electronic Oven', 
          price: 22000, 
          image: 'https://www.reliancedigital.in/medias/LG-MJ2886BWUM-Microwave-Ovens-491392151-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0ODQ0N3xpbWFnZS9qcGVnfGltYWdlcy9oODUvaDRkLzg5Nzk4MTkzMzE2MTQuanBnfDQ5NjNkNTc2ODRjN2M0MzZhZTUzYTAyZjQ5MzljYjczNjEwNTQ4ODI2NjllMzQ4MTVjM2FkOWRhN2QxMmYwOWQ',
          details: { uses: 'Baking', dosage: '500mg', sideEffects: 'Nausea, Dizziness', offers: '10% Off' }
        },
        { 
          name: 'Iron', 
          price: 4400, 
          image: 'https://www.reliancedigital.in/medias/Usha-AR1100WB-Irons-491902936-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDg3NHxpbWFnZS9qcGVnfGltYWdlcy9oY2UvaDNmLzk1OTUyOTM3OTQzMzQuanBnfGI0ZTgxOTYxZDExMjk1M2E1M2Y1Y2NhZmViMzM2ODUzMmFhMzczYmUyNmViZDQ3YzJmYjVjMGQ3ODU3NDMxMmY',
          details: { uses: 'Pain, Inflammation', dosage: '300mg', sideEffects: 'Upset Stomach', offers: 'Buy 1 Get 1 Free' }
        },
        { 
          name: 'Rice Cooker', 
          price: 8800, 
          image: 'https://www.reliancedigital.in/medias/PREETHI-GLITTER-RICE-COOKER-491666351-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4ODI4fGltYWdlL2pwZWd8aW1hZ2VzL2hmZi9oMmYvOTg0NDU2NDI2Mjk0Mi5qcGd8ODg4YWYwNmU3ZDBhOThjZTA2YjcwOGE3MTBiY2Y2YjkzZjNiNmI2ZmU1NDU0MDEzYWVjNWI2YmQ5OThhMDQyZg',
          details: { uses: 'Cough Relief', ingredients: 'Honey, Tulsi', sideEffects: 'Drowsiness', offers: 'Free Shipping' }
        },
        { 
          name: 'Mixer Grinder', 
          price: 9900, 
          image: 'https://m.media-amazon.com/images/I/51WEkopDGsL._AC_UF894,1000_QL80_.jpg',
          details: { uses: 'Bacterial Infections', dosage: '250mg', sideEffects: 'Allergy, Nausea', offers: 'Flat ₹10 Off' }
        },
        { 
          name: 'Vacuum Cleaner', 
          price: 8500, 
          image: 'https://www.jiomart.com/images/product/original/rvubkmuqcx/hpd-shakti-dry-and-wet-vaccum-cleaner-25l-for-vaccum-and-mopping-both-with-multiple-attachments-product-images-orvubkmuqcx-p604253399-0-202308302148.jpg?im=Resize=(360,360)', 
          details: { uses: 'Cleaning', features: 'Bagless, Lightweight', offers: '5% Off' }
        },
        
        { 
          name: 'Refrigerator', 
          price: 32000, 
          image: 'https://www.jiomart.com/images/product/original/492864856/samsung-700-litres-side-by-side-refrigerator-gentle-silver-matt-rs72r5001m9-tl-digital-o492864856-p591220462-0-202204191430.jpeg?im=Resize=(360,360)', 
          details: { uses: 'Cooling', features: 'Double Door, Energy Saving', offers: 'Free Installation' }
        },
        { 
          name: 'Blender', 
          price: 4500, 
          image: 'https://www.jiomart.com/images/product/original/rvcl0yahfa/rico-hbcj-pro-hand-blender-with-chutney-and-juice-jar-150-watt-white-product-images-orvcl0yahfa-p591540705-0-202408210904.jpg?im=Resize=(360,360)', 
          details: { uses: 'Blending, Mixing', features: 'Stainless Steel Blades', offers: '10% Off' }
        },
        { 
          name: 'Washing Machine', 
          price: 30000, 
          image: 'https://www.jiomart.com/images/product/original/492664433/lg-9-kg-front-load-fully-automatic-washing-machine-with-smart-diagnosis-system-fhm1409bdp-digital-o492664433-p591053949-0-202202221325.jpeg?im=Resize=(1000,1000)', 
          details: { uses: 'Cloth washing', features: 'Fully Automatic', offers: '10% Off' }
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
