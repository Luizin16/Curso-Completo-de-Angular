import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './helloworld/helloworld.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HelloWorldComponent],  // Certificando que o HelloWorldComponent está importado
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have "conceitos-basicos" title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('conceitos-basicos');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const appElement = fixture.nativeElement as HTMLElement;
    expect(appElement.querySelector('h1')?.textContent).toContain('conceitos-basicos');
  });
});
