import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contact = {
    name: '',
    email: '',
    message: '',
    phone: '',  
  };

   baseapi = "http://localhost:9090/contact/addContact";

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.http.post(this.baseapi, this.contact, { responseType: 'text' }).subscribe({
        next: (response) => {
          console.log('Response from server:', response); // Log plain text response.
          alert(response); // Display the plain text response in an alert.
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('API Error:', err);
          alert('Please try again later...!');
        },
      });
    } else {
      alert('Form is invalid. Please correct the errors and try again.');
    }
  }


}
