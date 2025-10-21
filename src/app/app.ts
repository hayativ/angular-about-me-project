import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'About Our Team';
  mission = 'We build delightful software';
  photoUrl =
    'https://kartin.papik.pro/uploads/posts/2023-06/1687976566_kartin-papik-pro-p-kartinki-solntse-na-chernom-fone-24.jpg';
  likes = 0;
  message = '';
  name = '';
  email = '';
  subscribeMessage = '';
  products: any[] = [];

  constructor(private http: HttpClient) {}

  like() {
    this.likes++;
  }

  toggleMessage() {
    this.message = this.message ? '' : 'Thank you for visiting!';
  }

  subscribe() {
    if (this.email) {
      this.subscribeMessage = `Thanks, ${this.email}! Let's be in touch`;
    }
  }

  loadCharacters() {
    const url =
      'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,image_id,date_display&page=1&limit=5';
    this.http.get<any>(url).subscribe(response => {
      this.products = response.data;
    });
  }

  getImageUrl(imageId: string): string {
    return imageId
      ? `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
      : '';
  }
}

bootstrapApplication(App);
