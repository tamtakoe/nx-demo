import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ExamplesComponent } from './examples/examples.component';
import { DemoControlsComponent } from './examples/demo-controls/demo-controls.component';
import { DemoTestingComponent } from "./examples/demo-testing/demo-testing.component";

const MAIN_ROUTES: Routes = [
  { path: '',   component: DemoTestingComponent},
  { path: 'examples',   component: ExamplesComponent},
  { path: 'examples/testing',   component: DemoTestingComponent},
  { path: 'examples/controls',   component: DemoControlsComponent},
  { path: '**', component: ErrorPageComponent }
];

const routes: Routes = MAIN_ROUTES;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
