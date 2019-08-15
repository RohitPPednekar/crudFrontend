import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatToolbarModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import {  CategoryModule} from './category/category.module';
import { ProductComponent } from './product/product.component';
import{AppRoutingModule}from'./app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedConnection} from './sharedConnection';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatDialogModule,
    // FormsModule,
    // MatButtonModule,
    // MatInputModule,
    // MatIconModule,
    // MatSortModule,
    // MatTableModule,
    // MatToolbarModule,
    // MatPaginatorModule,
    CategoryModule
  ],
  providers: [SharedConnection],
  bootstrap: [AppComponent]
})
export class AppModule { }
