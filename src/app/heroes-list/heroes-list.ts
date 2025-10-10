import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Rick and Morty Characters</h2>
    <button (click)="loadCharacters()">Load Characters</button>

    <ul *ngIf="characters.length > 0; else noData">
      <li *ngFor="let char of characters">
        <img [src]="char.image" alt="{{ char.name }}" width="50" height="50" />
        {{ char.name }} ({{ char.status }})
      </li>
    </ul>

    <ng-template #noData>
      <p>No data yet. Click "Load Characters".</p>
    </ng-template>
  `,
  styles: [`
    h2 {
      color: #3b3b98;
    }
    button {
      margin: 10px 0;
      padding: 8px 12px;
      background-color: #22a6b3;
      border: none;
      border-radius: 6px;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #0984e3;
    }
    ul {
      list-style: none;
      padding: 0;
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background: #f1f2f6;
    }
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px;
      border-bottom: 1px solid #dfe4ea;
    }
    li:last-child {
      border-bottom: none;
    }
    img {
      border-radius: 50%;
      border: 1px solid #ccc;
    }
  `]
})
export class CharacterListComponent {
  characters: any[] = [];

  constructor(private http: HttpClient) {}

  loadCharacters() {
    const randomPage = Math.floor(Math.random() * 42) + 1; // 🎲 от 1 до 42
    const url = `https://rickandmortyapi.com/api/character?page=${randomPage}`;

    this.http.get<any>(url).subscribe(response => {
      this.characters = response.results;
    });
  }
}
