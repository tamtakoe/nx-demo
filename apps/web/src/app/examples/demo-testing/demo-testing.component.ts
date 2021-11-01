import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-testing',
  templateUrl: './demo-testing.component.html',
  styleUrls: ['./demo-testing.component.css']
})
export class DemoTestingComponent implements OnInit {

  counters: number[] = [0];

  constructor() { }

  ngOnInit(): void {
  }

  addCounter() {
    this.counters.push(0);
  }

}
