import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { SpinnerService } from 'src/app/common/components/spinner/spinner.service';
import { HttpclientService } from 'src/app/common/services/httpclient.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  contactFormGroup: FormGroup;

  constructor( private httpclientService: HttpclientService, private _formBuilder: FormBuilder,private spinner: SpinnerService, ){
    this.contactFormGroup = this._formBuilder.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        message: ['', Validators.required],
        date: [new Date()],
        items: [[{id:52}]]
      }
    )
  }

  submitQuote(){


    if (!this.contactFormGroup.invalid){
      this.spinner.showSpinner();
      this.httpclientService.postRequest<any>("/api/quotes/savequote",this.contactFormGroup.value).subscribe((response: any) =>{
        console.log("Quote :", response)
        this.spinner.hideSpinner();
        this.contactFormGroup.reset();

      },(error:any)=>{
        console.log("Error Quote Save :", error);
        this.spinner.hideSpinner();
      })
    }
  }

}
