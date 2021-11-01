import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DemoCounterComponent } from './demo-counter.component';
import {By} from "@angular/platform-browser";

describe('DemoCounterComponent', () => {
  let component: DemoCounterComponent;
  let fixture: ComponentFixture<DemoCounterComponent>;

  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ DemoCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController); // For tests which use HTTP module

    fixture = TestBed.createComponent(DemoCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jest.spyOn(global.Math, "random").mockReturnValue(0.42); // For tests which use Math.random
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });

  // Base functionality
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment (controller checking only)', () => {
    expect(component.counter).toBe(0);
    component.increment();
    expect(component.counter).toBe(1);
  });

  it('should decrement (DOM checking for browsers only)', () => {
    const spyDecrement = jest.spyOn(component, 'decrement');
    const buttonElement = fixture.debugElement.nativeElement.querySelector('button.decrement');
    const counterElement = fixture.debugElement.nativeElement.querySelector('h3');

    buttonElement.click();
    fixture.detectChanges();

    expect(spyDecrement).toHaveBeenCalled();
    expect(counterElement.textContent.trim()).toBe('-1');
  });

  // Randomize
  it('should randomize (DOM checking for any platforms)', () => {
    const spyDecrement = jest.spyOn(component, 'randomize');
    const buttonElement = fixture.debugElement.query(By.css('button.randomize'));
    const counterElement = fixture.debugElement.query(By.css('h3'));

    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spyDecrement).toHaveBeenCalled();
    expect(counterElement.nativeElement.textContent.trim()).toBe('42'); // Because Math.random was mocked globally
  });

  // Mock http
  it('should set default value from server', fakeAsync(() => {
    const mockResponse = 3;
    const req = httpTestingController.expectOne('https://example.com/counter');

    req.flush(mockResponse);
    tick(); // Waiting for response + detectChanges

    expect(req.request.method).toBe('GET');
    expect(component.counter).toEqual(mockResponse);

    // Check that there are no more pending requests.
    httpTestingController.verify();
  }));
});
