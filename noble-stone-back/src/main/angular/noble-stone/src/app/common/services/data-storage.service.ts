import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpclientService } from './httpclient.service';
import { SpinnerService } from '../components/spinner/spinner.service';
import { item } from '../interfaces/app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  set token(token: string){
    localStorage.setItem("token", token)
  }

  get token() {
    return localStorage.getItem("token") as string;
  }

  public tokenBoolean: Subject<boolean> = new  Subject<boolean>;

  public fetchedItem: Subject<item[]> = new  Subject<item[]>;
  public staticItems: item[] =[];
  

  public quoteRequestItems: item[] = [];
  servicesItem: item[] = [];

  public clientQuoteItems: Subject<number> = new Subject<number>();

  constructor(private httpclientService: HttpclientService, private spinner: SpinnerService, ) {
    this.clientQuoteItems.next(0);
  }

  fetchAllServicesItems(){
    this.spinner.showSpinner();
    this.httpclientService.getRequest<item[]>("/api/items/getallitems").subscribe((response:item[]) =>{
      this.fetchedItem.next(response);
      this.staticItems = response;
      this.spinner.hideSpinner();
    },error=>{
      console.log("Error for getallitems", error);
      this.spinner.hideSpinner();
    })
  }

  addQuoteRequest(item: item){
    if (this.quoteRequestItems.indexOf(item, 0) < 0){
      this.quoteRequestItems.push(item);
      this.clientQuoteItems.next( this.quoteRequestItems.length);
    }
  }

  removeQuoteRequest(item: item){
    const index = this.quoteRequestItems.indexOf(item, 0);
    if (index > -1) {
      this.quoteRequestItems.splice(index, 1);
    }
    this.clientQuoteItems.next( this.quoteRequestItems.length);
  }
}
