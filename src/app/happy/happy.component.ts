import { Component } from '@angular/core';

@Component({
  selector: 'app-happy',
  standalone: false,
  
  templateUrl: './happy.component.html',
  styleUrl: './happy.component.css'
})
export class HappyComponent {
   // Array of client testimonials
   testimonials = [
    {
      name: 'Bhuvnesh Patil',
     
      feedback: 'This website is fantastic! The products are of excellent quality, and the delivery was swift.',
      rating: 5
    },
    {
      name: 'Vishakha Jadhav',
     
      feedback: 'Great customer service! I had an issue with my order, and they resolved it promptly.',
      rating: 4
    },
    {
      name: 'Siddhi Khalate',
      
      feedback: 'I love the variety of products available. Highly recommended!',
      rating: 5
    },
    {
      name: 'Harshada Rajput',
     
      feedback: 'This website is fantastic! The products are of excellent quality, and the delivery was swift.',
      rating: 5
    },
    {
      name: 'Rahul lokare',
     
      feedback: 'Great customer service! I had an issue with my order, and they resolved it promptly.',
      rating: 3
    },
    {
      name: 'Vrushali Bagal',
      
      feedback: 'I love the variety of products available. Highly recommended!',
      rating: 3
    },
    {
      name: 'Sahil Matha',
      
      feedback: 'I love the variety of products available. Highly recommended!',
      rating: 4
    }
  ];

  // Method to get stars based on the rating
  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((_, i) => i + 1);
  }
}


