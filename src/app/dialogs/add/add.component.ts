import {MAT_DIALOG_DATA, MatDialogRef,MatError} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {SharedData} from '../../sharedData';
import {FormControl, Validators} from '@angular/forms';
import {SharedConnection} from '../../sharedConnection';


@Component({
  selector: 'app-add.dialog',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              public dataService: SharedData,
              public sharedConnection : SharedConnection) {
                  
               }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    //already added by 2 way data binding//this.dataService.Data = this.data;
    //TODO save in DB
    this.sharedConnection.addCategory(this.dataService.Data).subscribe((Data) =>{
      if(Data['status'] == 200){
        if(Data['data'] != undefined){
          //updating id only if any Data new added
          this.dataService.Data.id = Data['data'].id;
        }
        this.dialogRef.close("Done");
      }
      
    });
  }
}