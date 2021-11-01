import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesComponent } from './examples.component';
import { HttpClientModule } from '@angular/common/http';
import { ExampleResource } from '../_resources/example.res';
import { FormsModule } from '@angular/forms';
import { BrowserTestingModule } from '@angular/platform-browser/testing';

describe('ExamplesComponent', () => {
  let component: ExamplesComponent;
  let fixture: ComponentFixture<ExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplesComponent ],
      imports: [ HttpClientModule, FormsModule, BrowserTestingModule ],
      providers: [ ExampleResource ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
