import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <!-- Interpolation -->
    <h1>{{ title }}</h1>
    <p>{{ mission }}</p>

    <!-- Property Binding -->
    <img [src]="photoUrl" alt="Team photo" width="250" />

    <!-- Event Binding -->
    <div>
      <button (click)="like()">Like</button>
      <p>Likes: {{ likes }}</p>

      <button (click)="toggleMessage()">Toggle Message</button>
      <p>{{ message }}</p>
    </div>

    <!-- Two-way Binding -->
    <div>
      <input [(ngModel)]="name" placeholder="Enter your name" />
      <p>Hello, {{ name }}!</p>

      <input [(ngModel)]="email" placeholder="Enter your email" />
      <button (click)="subscribe()">Subscribe</button>
      <p>{{ subscribeMessage }}</p>
    </div>
  `,
})
export class App {
  // Interpolation
  title = 'About Our Team';
  mission = 'We build delightful software';

  // Property Binding
  photoUrl = 'https://kartin.papik.pro/uploads/posts/2023-06/1687976566_kartin-papik-pro-p-kartinki-solntse-na-chernom-fone-24.jpg';

  // Event Binding
  likes = 0;
  message = '';

  like() {
    this.likes++;
  }

  toggleMessage() {
    if (this.message) {
      this.message = '';
    } else {
      this.message = 'Thank you for visiting!';
    }
  }

  // Two-way Binding
  name = '';
  email = '';
  subscribeMessage = '';

  subscribe() {
    if (this.email) {
      this.subscribeMessage = `Thanks, ${this.email}! Let's be in touch`;
    }
  }
}

bootstrapApplication(App);
