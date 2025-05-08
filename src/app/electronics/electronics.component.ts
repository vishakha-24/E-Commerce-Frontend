import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-electronics',
  standalone: false,
  
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {
  objectKeys = Object.keys;
  categories = [
    
    { 
      name: 'Electronics', 
      products: [
        { 
          name: 'Laptop', 
          price: 49999, 
          image: 'https://www.jiomart.com/images/product/original/494493354/apple-mc7x4hn-a-macbook-air-13-8-core-apple-m2-chip-16-gb-256-gb-ssd-mac-os-sequoia-liquid-retina-34-46-cm-13-6-inch-midnight-digital-o494493354-p610616238-0-202410311446.jpeg?im=Resize=(360,360)',
          details: { brand: 'Dell', warranty: '2 years', specifications: '16GB RAM, 512GB SSD', offers: 'Free Mouse & Bag' }
        },
        { 
          name: 'Headphones', 
          price: 1999, 
          image: 'https://www.jiomart.com/images/product/original/491893355/boat-rockerz-450-wireless-bluetooth-headphone-with-up-to-8h-playback-adaptive-lightweight-design-immersive-audio-easy-access-controls-and-dual-mode-compatibility-black-digital-o491893355-p590035524-0-202210061933.jpeg?im=Resize=(360,360)',
          details: { brand: 'Sony', warranty: '1 year', features: 'Noise Cancelling', offers: '10% Cashback' }
        },
        { 
          name: 'Smart Watch', 
          price: 2999, 
          image: 'https://www.jiomart.com/images/product/original/493837997/noise-pulse-2-max-4-69-cm-1-85-inch-display-bluetooth-calling-smart-watch-10-days-battery-550-nits-brightness-smart-dnd-100-sports-modes-smartwatch-for-men-and-women-jet-black-digital-o493837997-p610017447-0-202409241216.jpeg?im=Resize=(360,360)',
          details: { brand: 'Amazfit', warranty: '1 year', features: 'Heart Rate Monitor', offers: 'Buy 1 Get 1 Free' }
        },
        {
          name: 'Gaming Laptop',
          price: 59999,
          image: 'https://www.jiomart.com/images/product/original/494422105/asus-tuf-a15-fa506nfr-hn259ws-gaming-laptop-amd-ryzen-7-7435hs-16-gb-512-gb-ssd-nvidia-win11-home-msoffice-full-hd-39-62-cm-15-6-inch-graphite-black-digital-o494422105-p609585598-0-202407261818.jpeg?im=Resize=(360,360)',
          details: {
            brand: 'HP',
            warranty: '2 years',
            features: '16GB RAM, RTX 3060, 144Hz Display',
            offers: 'Free Gaming Mouse'
          }
        },

        {
          name: 'Bluetooth Speaker',
          price: 1999,
          image: 'https://www.jiomart.com/images/product/original/493842115/boat-stone-358-with-10w-rms-stereo-sound-ipx7-water-resistance-tws-feature-up-to-12h-total-playtime-multi-compatibility-modes-and-type-c-charging-digital-o493842115-p601777312-0-202305251149.jpeg?im=Resize=(360,360)',
          details: {
            brand: 'JBL',
            warranty: '6 months',
            features: 'Portable, Waterproof, Deep Bass',
            offers: 'Combo Offer with Headphones'
          }
        },

        {
          name: '4K Smart TV',
          price: 34999,
          image: 'https://www.jiomart.com/images/product/original/491898016/lg-80-cm-32-inch-hd-ready-led-smart-tv-32lm560-digital-o491898016-p590039885-0-202109141232.jpeg?im=Resize=(360,360)',
          details: {
            brand: 'Sony',
            warranty: '3 years',
            features: '4K UHD, HDR10, Google TV',
            offers: 'Free Wall Mount Installation'
          }
        },
        { 
          name: 'Camera', 
          price: 24999, 
          image: 'https://www.jiomart.com/images/product/original/491431245/nikon-d7500-dslr-camera-with-af-s-dx-nikkor-18-140mm-f-3-5-5-6g-ed-vr-lens-digital-o491431245-p590036400-0-202009260321.jpeg?im=Resize=(360,360)',
          details: { brand: 'Canon', warranty: '2 years', features: '24MP, 4K Video', offers: 'Free Memory Card' }
        },
        
        {
          name: 'Power Bank',
          price: 999,
          image: 'https://www.jiomart.com/images/product/original/494352976/evm-enjoy-10000-mah-power-bank-black-evm-p0405-digital-o494352976-p608984766-0-202405151916.jpeg?im=Resize=(360,360)',
          details: {
            brand: 'Anker',
            warranty: '1 year',
            features: '10000mAh, Fast Charging',
            offers: 'Buy 2 for ₹1500'
          }
        },
        {
          name: 'Electric Kettle',
          price: 1299,
          image: 'https://www.jiomart.com/images/product/original/491373220/prestige-1-5-litres-1500-watts-electric-kettle-pkoss-digital-o491373220-p491373220-0-202010110045.jpeg?im=Resize=(360,360)',
          details: {
            brand: 'Prestige',
            warranty: '1 year',
            features: '1.5L, Auto Shut-Off, 360° Swivel Base',
            offers: 'Flat ₹200 Off'
          }
        },
        {
          name: 'Air Purifier',
          price: 8999,
          image: 'https://www.jiomart.com/images/product/original/494338492/philips-ac1715-60-smart-air-purifier-white-digital-o494338492-p610033830-0-202409261852.jpeg?im=Resize=(360,360)',
          details: {
            brand: 'Dyson',
            warranty: '2 years',
            features: 'HEPA Filter, Quiet Operation',
            offers: 'Free Filter Replacement for 1 Year'
          }
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
