import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpinnerService } from 'src/app/common/components/spinner/spinner.service';
import { HttpclientService } from 'src/app/common/services/httpclient.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  userFormGroup: FormGroup;

  constructor( private httpclientService: HttpclientService, private spinner: SpinnerService,
                private _formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AddUserComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any
  ){

    this.userFormGroup = this._formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: [''],
      role: ['', Validators.required],
      }
    )

    if(data){
      this.userFormGroup.patchValue(data)
    }
    
  }

  saveUser(){
    if (this.userFormGroup.valid){
      this.dialogRef.close(this.userFormGroup.value);
    }
  }

}
