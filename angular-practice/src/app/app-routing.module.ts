import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Art01Component } from './art01/art01.component';
import { IndexComponent } from './index/index.component';
import { Tech01Component } from './tech01/tech01.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'tech01', component: Tech01Component },
  { path: 'art01', component: Art01Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
