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
  isSubmitting = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(form: NgForm): void {
    // Mark all fields as touched to show validation errors
    if (form.invalid) {
      this.markFormGroupTouched(form);
      return;
    }

    if (form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        console.log('Form Data:', this.formData);
        this.formSubmitted = true;
        this.isSubmitting = false;
        
        // Reset form after successful submission
        form.resetForm();
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.formSubmitted = false;
        }, 5000);
      }, 1000);
    }
  }

  private markFormGroupTouched(form: NgForm): void {
    Object.keys(form.controls).forEach(key => {
      const control = form.controls[key];
      control.markAsTouched();
    });
  }

  // Helper method to check if a field has specific error
  hasError(field: any, errorType: string): boolean {
    return field.errors && field.errors[errorType] && field.touched;
  }

  // Helper method to get error message
  getErrorMessage(field: any): string {
    if (!field.errors || !field.touched) return '';
    
    if (field.errors['required']) return 'This field is required';
    if (field.errors['email']) return 'Please enter a valid email address';
    if (field.errors['minlength']) return `Minimum ${field.errors['minlength'].requiredLength} characters required`;
    if (field.errors['maxlength']) return `Maximum ${field.errors['maxlength'].requiredLength} characters allowed`;
    
    return 'Invalid input';
  }
}
