import { Component, OnInit } from '@angular/core';
import { Message } from '@nx-angular-nest/api-interfaces';
import { config } from '../../environments/app.config';
import { HttpClient } from '@angular/common/http';
import { ExampleResource } from '../_resources/example.res';

@Component({
  selector: 'nx-angular-nest-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {
  hello$ = this.http.get<Message>(config.resources.api.host + '/hello');
  data: any[] = [];

  constructor(private http: HttpClient, private exampleResource: ExampleResource) {}

  ngOnInit(): void {
    this.exampleResource.query().then((data: any[]) => {
      console.log('data:', data);
      this.data = data;
    })
  }

  sendSmth() {
    console.log('SEND');
    this.http.post<Message>(config.resources.api.host + '/hello', { message: 'OLOLO' }).toPromise()
      .then((data: any) => {
        console.log('Post:', data);
        this.data = data;
      });
  }
}
