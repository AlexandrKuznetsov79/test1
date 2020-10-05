import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './pages/page1/page1.component';
import { Pages2Component } from './pages/pages2/pages2.component';

const routes: Routes = [
  { path: 'test2', component: Pages2Component },
  { path: 'test/:id', component: Page1Component },
  { path: '', component: Page1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
