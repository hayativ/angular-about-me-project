import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { App } from './app';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should increase likes when like() is called', () => {
    const initialLikes = component.likes;
    component.like();
    expect(component.likes).toBe(initialLikes + 1);
  });

  it('should toggle message', () => {
    component.toggleMessage();
    expect(component.message).toBe('Thank you for visiting!');
    component.toggleMessage();
    expect(component.message).toBe('');
  });

  it('should update subscribeMessage when email is entered', () => {
    component.email = 'test@example.com';
    component.subscribe();
    expect(component.subscribeMessage).toContain('Thanks, test@example.com!');
  });

  it('should generate valid image URL', () => {
    const imageId = 'abc123';
    const expected = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
    expect(component.getImageUrl(imageId)).toBe(expected);
  });

  it('should return empty string if imageId missing', () => {
    expect(component.getImageUrl('')).toBe('');
  });

  it('should have empty products initially', () => {
    expect(component.products.length).toBe(0);
  });
});
