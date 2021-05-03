import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class BusinessModule {}
