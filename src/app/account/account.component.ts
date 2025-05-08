import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: false,
  
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  users = [
    {
      name: 'Rahul Chavan',
      profilePicture: 'https://cdn-icons-png.flaticon.com/256/8615/8615082.png',
      mobile: '+919456577789',
      email: 'john.doe@example.com',
      address: '123 Bajroa Road, Pune, Maharastra'
    },
    {
      name: 'Jayesh jadhav',
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/4394/4394545.png',
      mobile: '+9187 654 32103',
      email: 'jane.smith@example.com',
      address: '12, Km Colony, Kolhapur, Maharastra'
    },
    {
      name: 'Prachi Patil',
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/5231/5231019.png',
      mobile: '+91897946 0958',
      email: 'emily.j@example.co.uk',
      address: '1, Mg road, Pune, Maharastra'
    },
    {
      name: 'Snehal Patil',
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/3577/3577084.png',
      mobile: '+918987899965',
      email: 'michael.b@example.in',
      address: '34, JM Road, Satara, Maharastra'
    },
    {
      name: 'Hemant Bhosale',
      profilePicture: 'https://cdn-icons-png.flaticon.com/256/537/537245.png',
      mobile: '+91 869876 54322',
      email: 'sarah.davis@example.au',
      address: '9, FC Road, Pune, Maharastra'
    },
    {
      name: 'Gauri Jadhav',
      profilePicture: 'https://cdn-icons-png.flaticon.com/256/2829/2829835.png',
      mobile: '+916708977893',
      email: 'sarah.davis@example.au',
      address: '2, JM Road, Pune, Maharastra'
    },
    {
      name: 'Soniya Bhujbal',
      profilePicture: 'https://cdn-icons-png.flaticon.com/256/5182/5182011.png',
      mobile: '+914563578668',
      email: 'sarah.davis@example.au',
      address: '3 ,datt colony,Jalgaon, Maharastra'
    },
    {
      name: 'Vipul patil',
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/3963/3963410.png',
      mobile: '+91567768996',
      email: 'sarah.davis@example.au',
      address: '1, Gh Road, Solapur, Maharastra'
    }
  ];


}
