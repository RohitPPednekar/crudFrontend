import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {  CategoryModule} from './category/category.module';
import { ProductComponent } from './product/product.component';
import{AppRoutingModule}from'./app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedConnection} from './sharedConnection';
import {SharedData} from './sharedData';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CategoryModule
  ],
  providers: [
    SharedConnection,
    SharedData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
