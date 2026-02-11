import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { item } from 'src/app/common/interfaces/app.interfaces';
import { DataStorageService } from 'src/app/common/services/data-storage.service';
import { AddProductComponent } from './add-product/add-product.component';
import { SpinnerService } from 'src/app/common/components/spinner/spinner.service';
import { HttpclientService } from 'src/app/common/services/httpclient.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  allItems: item[] = [];

  constructor(public dialog: MatDialog, private dataStorageService: DataStorageService,private httpclientService: HttpclientService,
    private spinner: SpinnerService,){
    this.allItems = dataStorageService.staticItems;
    this.fetchProducts()
  }

  openDialog(product?:any) {
    const dialogRef = this.dialog.open(AddProductComponent,{
      width:"1000px",
      data: product ? product : null
    }).afterClosed().subscribe({next:(prod)=>{
      // this.saveUser(usr);
      this.saveProduct(prod);
    }})
  }

  fetchProducts(){
    this.spinner.showSpinner();
    this.httpclientService.getRequest<item[]>("/api/items/getallitems").subscribe((response:item[]) =>{
      this.allItems = response;
      this.spinner.hideSpinner();
    },error=>{
      console.log("Error for getallitems", error);
      this.spinner.hideSpinner();
    })
  }

  saveProduct(product?:any){
    this.spinner.showSpinner()
    this.httpclientService.postRequest<any>("/api/items/saveitem",product).subscribe({
      next:(res:any)=>{
        this.spinner.hideSpinner();
        this.fetchProducts();
      },
      error:(err) => {
        console.log("product?:any error : ", err);
        this.spinner.hideSpinner()
      },
    })
  }

  editProduct(product?:any){
    this.openDialog(product)
    console.log("The edit user : ", product);
  }

  deleteProduct(product?:any){
    this.spinner.showSpinner()
    this.httpclientService.postRequest<any>("/api/items/removeitem",product).subscribe({
      next:(res:any)=>{
        this.spinner.hideSpinner();
        this.fetchProducts();
      },
      error:(err) => {
        console.log("product?:any error : ", err);
        this.spinner.hideSpinner()
      },
    })
  }
}
