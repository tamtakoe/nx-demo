import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-demo-counter',
  templateUrl: './demo-counter.component.html',
  styleUrls: ['./demo-counter.component.css']
})
export class DemoCounterComponent implements OnInit {

  counter = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://example.com/counter').toPromise().then((counter: number) => {
      this.counter = counter;
    });
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  randomize() {
    this.counter = Math.round(Math.random() * 100);
  }
}
