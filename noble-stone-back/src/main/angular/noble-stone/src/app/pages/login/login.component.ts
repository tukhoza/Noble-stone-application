import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { DataStorageService } from 'src/app/common/services/data-storage.service';
import { HttpclientService } from 'src/app/common/services/httpclient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginFormGroup: FormGroup;

  constructor(private router: Router, private httpclientService: HttpclientService,
              private _formBuilder: FormBuilder, private dataStorageService: DataStorageService){

    if (dataStorageService.token){
      this.router.navigate(["/dashboard"])
    }
    this.loginFormGroup = this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      }
    )
  }



  onLogin(){
    // this.router.navigate(["/dashboard"])
    console.log("login : ", this.loginFormGroup.value)

    if (this.loginFormGroup.valid){
      console.log("login  if : ", this.loginFormGroup.value)
      this.httpclientService.postRequest<any>("/api/auth/authenticate", this.loginFormGroup.value).subscribe({
        next:(res)=>{
          this.dataStorageService.token = res.token as string;
          this.dataStorageService.tokenBoolean.next(true);
          this.router.navigate(["/dashboard"])
        }, error:(err)=>{
          console.log("login error ; ",err)
        }
      })
    }
  }

}
