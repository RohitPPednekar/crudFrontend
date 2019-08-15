import { Component, OnInit } from '@angular/core';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {SharedConnection} from '../sharedConnection';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  filteredData=[];
  dataSource:any;
  Pages:number = 1;
  displayedColumns: string[] = ['id', 'name'];

  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public sharedConnection : SharedConnection
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

}

