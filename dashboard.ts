import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daashboard',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './daashboard.html',
  styleUrl: './daashboard.css',
})
export class Daashboard {
  private fb = inject(FormBuilder);
  private route = inject(Router);
  bookingForm: FormGroup;

  constructor() {
    this.bookingForm = this.fb.group({
      pickupLocation: ['', Validators.required],
      dropoffLocation: ['', Validators.required],
      pickupDate: ['', Validators.required],
      dropoffDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log('Booking details:', this.bookingForm.value);
      this.route.navigate(['/layout']);
     
    
    }
  }
}
