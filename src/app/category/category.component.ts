import { Component, OnInit } from '@angular/core';
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
  dataSource:any;
  Pages:number = 1;
  displayedColumns: string[] = ['id', 'name','actions'];

  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public sharedConnection : SharedConnection,
    public sharedData : SharedData,
    ) { }

  ngOnInit() {
    this.getCategory(this.Pages);

  }

  getCategory(pages){
    this.sharedConnection.getCategory(pages).subscribe((categoryData) =>{
      if(categoryData['data'].length > 0){
        this.dataSource = new MatTableDataSource(categoryData['data']);
      }
      
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddDialogComponent,);

    dialogRef.afterClosed().subscribe(result => {
    
        // TODO add this.sharedData.Data obj value in DataSource
        // TODO for edit add this.sharedData.Data obj value in that DataSource ids
        console.log("sharedData------------>"+JSON.stringify(this.sharedData.Data))
      
    });
  }

}

