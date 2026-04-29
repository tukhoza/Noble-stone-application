import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { DataStorageService } from './common/services/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'noble-stone';
  quote:any;
  login?:boolean;

  constructor(private dataStorageService: DataStorageService){
    this.dataStorageService.clientQuoteItems.subscribe((quotes:number) =>{
      this.quote = quotes;
    })
    this.dataStorageService.tokenBoolean.next(localStorage.getItem("token") ? true : false)
    this.dataStorageService.fetchAllServicesItems()
  }

  ngOnInit(): void {
    this.dataStorageService.tokenBoolean.subscribe({next:(bool:boolean)=>{
      this.login = bool;
    }})
    initFlowbite();
  }
}
