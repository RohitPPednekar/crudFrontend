import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {SharedConnection} from '../sharedConnection';
import {SharedData} from '../sharedData';
import { AddDialogComponent } from '../dialogs/add/add.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  filteredData=[];
  CategoryData=[];
  dataSource:any;
  Pages:number = 1;
  category_id :number;
  Category_Name :string;
  displayedColumns: string[] = ['id', 'name',"category_Name","category_Id",'edit','delete','add'];

  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public sharedConnection : SharedConnection,
    public sharedData : SharedData,
    public route : ActivatedRoute
    ) { }

  ngOnInit() {
    this.category_id = +this.route.snapshot.paramMap.get("id");
    
    this.getProduct(this.Pages,this.category_id);

  }

  getProduct(pages,category_id){
    this.sharedConnection.getProduct(pages,category_id).subscribe((categoryData) =>{
      if(categoryData['data'].length > 0){
        this.Category_Name = categoryData['data'][0].category.name;
        this.CategoryData = [...categoryData['data']];
        this.dataSource = new MatTableDataSource(categoryData['data']);
      }
      
    });
  }

  addProduct() {
    const dialogRef = this.dialog.open(AddDialogComponent,);
    this.sharedData.Data.type = "Product";
    this.sharedData.Data.category_id = this.category_id;
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


  editProduct(id,name) {
    
    this.sharedData.Data.id = id;
    this.sharedData.Data.name = name;
    this.sharedData.Data.type = "Product";
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

  removeProduct(id) {
    
    this.sharedConnection.removeProduct(id).subscribe((categoryRemove) =>{
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
