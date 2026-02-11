import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpinnerService } from 'src/app/common/components/spinner/spinner.service';
import { HttpclientService } from 'src/app/common/services/httpclient.service';
import { AddUserComponent } from '../../users/add-user/add-user.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productFormGroup: FormGroup;

  constructor( private httpclientService: HttpclientService, private spinner: SpinnerService,
                private _formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AddUserComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any
  ){

    this.productFormGroup = this._formBuilder.group({
      id: [''],
      itemName: ['', ],
      itemCategory: ['', ],
      itemSubCategory: [''],
      itemDescription: [''],
      itemPrice: [''],
      itemList: this._formBuilder.array([['']]),
      }
    )

    if(data){
      this.productFormGroup.patchValue(data)
    }
  }

  get itemLists() {
    return this.productFormGroup.controls["itemList"] as FormArray;
  }

  addItem(): void {
    const control = <FormArray>this.productFormGroup.controls['itemList'];
    control.push(this._formBuilder.control('')); // Add a new empty string control
  }

  removeItem(index: number): void {
    const control = <FormArray>this.productFormGroup.controls['itemList'];
    control.removeAt(index);
  }

  productSave(){
    console.log("this.productFormGroup.value :", this.productFormGroup)
    if (this.productFormGroup){
      this.dialogRef.close(this.productFormGroup.value);
    }
  }
}
