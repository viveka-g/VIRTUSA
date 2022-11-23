import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Format1Component } from './format1/format1.component';
import { Format2Component } from './format2/format2.component';
import { Format3Component } from './format3/format3.component';


const routes:Routes = [
    {path:'format1',component:Format1Component},
    {path:'format2',component:Format2Component},
    {path:'format3',component:Format3Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Format1Component,
    Format2Component,
    Format3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
