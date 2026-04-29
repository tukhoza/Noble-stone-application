import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpclientService } from 'src/app/common/services/httpclient.service';

@Component({
  selector: 'app-gallery-hub',
  templateUrl: './gallery-hub.component.html',
  styleUrls: ['./gallery-hub.component.scss']
})
export class GalleryHubComponent {

  imageSrc: any;
  uploadFormGroup: FormGroup;

  constructor( private httpclientService: HttpclientService, private _formBuilder: FormBuilder,){
    this.uploadFormGroup = this._formBuilder.group({
      file: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      }
    )
  }

  uploadFile(){
    if(this.uploadFormGroup.valid){
      const formData = new FormData();
      const image = this.uploadFormGroup.get('file')?.value;

      formData.append('file', image);

      const milti = {
        "file" : formData,
        "category" : this.uploadFormGroup.get('category')?.value
      }

      this.httpclientService.postRequest<any>("/api/photos/savephoto",milti).subscribe({next:(response: any)=>{
        console.log("Photo saved")
      }, error:(err:any)=>{
        console.log("Photo err : ",err);
      }
    })
    }
  }

  readURL(event:any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }
}
