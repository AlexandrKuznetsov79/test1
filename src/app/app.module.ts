import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { Pages2Component } from './pages/pages2/pages2.component';
import JestWorker from 'jest-worker';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, Page1Component, Pages2Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, JestWorker],
  bootstrap: [AppComponent],
})
export class AppModule {}
