import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {SharedData} from '../sharedData';
import {
  MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatToolbarModule,MatFormFieldModule
} from '@angular/material';
import {AddDialogComponent} from '../dialogs/add/add.component';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    AddDialogComponent
  ],
  declarations: [
    CategoryComponent,
    AddDialogComponent
  ],
  entryComponents: [AddDialogComponent],
  providers: [
    SharedData
  ],
})
export class CategoryModule { }
