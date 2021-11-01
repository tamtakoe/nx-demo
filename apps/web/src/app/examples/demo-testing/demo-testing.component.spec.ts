import {ComponentFixture, TestBed} from '@angular/core/testing';

import { DemoTestingComponent } from './demo-testing.component';
import {By} from "@angular/platform-browser";
import {DemoCounterComponent} from "./demo-counter/demo-counter.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DemoTestingComponent', () => {
  let component: DemoTestingComponent;
  let fixture: ComponentFixture<DemoTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ DemoTestingComponent, DemoCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add counter
  it('should add counter', () => {
    const counterElementsBefore = fixture.debugElement.queryAll(By.css('app-demo-counter'));
    expect(counterElementsBefore.length).toBe(1);

    component.addCounter();
    fixture.detectChanges();

    const counterElementsAfter = fixture.debugElement.queryAll(By.css('app-demo-counter'));
    expect(counterElementsAfter.length).toBe(2);
  });
});
