import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplesComponent } from './examples/examples.component';
import { DemoTestingComponent } from './examples/demo-testing/demo-testing.component';
import { DemoCounterComponent } from './examples/demo-testing/demo-counter/demo-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    DemoTestingComponent,
    DemoCounterComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
