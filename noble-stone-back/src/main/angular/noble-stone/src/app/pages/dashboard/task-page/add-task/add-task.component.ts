import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpclientService } from 'src/app/common/services/httpclient.service';
import { AddUserComponent } from '../../users/add-user/add-user.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  todoFormGroup: FormGroup;

  constructor( private httpclientService: HttpclientService,
                private _formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AddUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any
              ){
    this.todoFormGroup = this._formBuilder.group({
      id: [''],
      usernameId: [''],
      todoTitle: ['', Validators.required],
      todoDescription: ['', Validators.required],
      done: [''],
      }
    )

    if(data){
      this.todoFormGroup.patchValue(data)
    } 
  }

  saveTodo(){
    if (this.todoFormGroup.valid){
      this.dialogRef.close(this.todoFormGroup.value);
    }
  }
}
