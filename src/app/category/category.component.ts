import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {SharedConnection} from '../sharedConnection';
import {SharedData} from '../sharedData';
import { AddDialogComponent } from '../dialogs/add/add.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  filteredData=[];
  CategoryData=[];
  dataSource:any;
  Pages:number = 1;
  displayedColumns: string[] = ['id', 'name','edit','delete','productPage','add'];

  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public sharedConnection : SharedConnection,
    public sharedData : SharedData,
    public route : Router
    ) { }

  ngOnInit() {
    this.getCategory(this.Pages);

  }

  getCategory(pages){
    this.sharedConnection.getCategory(pages).subscribe((categoryData) =>{
      if(categoryData['data'].length > 0){
        this.CategoryData = [...categoryData['data']];
        this.dataSource = new MatTableDataSource(categoryData['data']);
      }
      
    });
  }

  nextPagination(){
    this.Pages +=1; 
    this.getCategory(this.Pages)
  }

  prevPagination(){
    this.Pages -=1; 
    this.getCategory(this.Pages)
  }

  navigateProduct(category_id,category_name){
    this.sharedData.Data.category_name = category_name;
    this.route.navigate(['/product',category_id]);
  }

  addCategory() {
    const dialogRef = this.dialog.open(AddDialogComponent,);
    this.sharedData.Data.type = "Category";
    dialogRef.afterClosed().subscribe(result => {
      //TODO logic for showing only current page rows less than 10
      if(this.sharedData.Data.name!=undefined && result!=undefined){
        var newRow = {id:0,name:''}
        newRow.id = this.sharedData.Data.id;
        newRow.name = this.sharedData.Data.name;
        this.CategoryData.push(newRow)
        this.dataSource = new MatTableDataSource(this.CategoryData);
        this.sharedData.Data.id = 0;
        this.sharedData.Data.name = "";
        
      }  
    });
  }


  editCategory(id,name) {
    
    this.sharedData.Data.id = id;
    this.sharedData.Data.name = name;
    this.sharedData.Data.type = "Category";
    const dialogRef = this.dialog.open(AddDialogComponent,);

    dialogRef.afterClosed().subscribe(result => {
      if(this.sharedData.Data.name!=undefined && result!=undefined){    
        var editedNameIndex = this.CategoryData.findIndex((elems)=>elems.id == id);
        this.CategoryData[editedNameIndex].name = this.sharedData.Data.name;
        this.sharedData.Data.id = 0;
        this.sharedData.Data.name = "";
        
      }  
    });
  }

  removeCategory(id) {
    
    this.sharedConnection.removeCategory(id).subscribe((categoryRemove) =>{
      if(categoryRemove['status'] == 200){
            
          var Index = this.CategoryData.findIndex((elems)=>elems.id == id);  
          this.CategoryData.splice(Index, 1);
          this.dataSource = new MatTableDataSource(this.CategoryData);
          
      }
    });   
    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

