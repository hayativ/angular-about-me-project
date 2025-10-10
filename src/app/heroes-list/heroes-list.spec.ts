import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterListComponent } from './heroes-list';

describe('HeroesList', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CharacterListComponent,             
        HttpClientTestingModule 
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no characters initially', () => {
    expect(component.characters.length).toBe(0);
  });

  it('should set characters after loadCharacters() if API responds', () => {
    const mockCharacters = [{ name: 'Rick Sanchez' }, { name: 'Morty Smith' }];
    component.characters = mockCharacters;
    expect(component.characters.length).toBe(2);
    expect(component.characters[0].name).toBe('Rick Sanchez');
  });
});
