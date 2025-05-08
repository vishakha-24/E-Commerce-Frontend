import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: false,
  
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  cards = [
    {
      title: 'E-commerce website',
      content:
        'Welcome to the Online Shopping System (OSS), your one-stop destination for a wide range of electronics, fashion, furniture, and much more. We aim to make your shopping experience seamless and enjoyable with top-quality products and excellent service.',
      image: 'IMG1.png',
      link: 'Introduction'
    },
    {
      title: 'Headquarter',
      address: `Online Shopping System Pvt. Ltd.
                1234, Tech Park Street, City Pune
                Country: India
                Phone: +91-9876543210
                Email: oss@support.com`,
      image: 'IMG3.png',
      link: 'Head Office Location'
    },
    {
      title: 'Managing Director',
      content:
        'With over 20 years of experience in the e-commerce industry, Xyz leads OSS with a vision to revolutionize online shopping.',
      image: 'IMG4.png',
      link: 'Meet Our Managing Director'
    }
  ];
}
