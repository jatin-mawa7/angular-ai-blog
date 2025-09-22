import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formSubmitted = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Data:', this.formData);
      this.formSubmitted = true;
      form.resetForm(); // reset the form after submission
    } 
  }

}
