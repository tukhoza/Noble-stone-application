import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabsOptions, InstanceOptions, TabsInterface, Tabs, DrawerInterface, Drawer } from 'flowbite';
import { DataStorageService } from 'src/app/common/services/data-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  showFiller = false;
  isExpanded = false;
   draw:any

  constructor(private router: Router,private scroller: ViewportScroller,  private dataStorageService:DataStorageService){
    
  }
  ngOnInit(): void {
  }

  show(){
    this.isExpanded = !this.isExpanded
  }

  hideDawer(){
    this.isExpanded = !this.isExpanded
  }

  something(){
    console.log("it works !!!!")
  }

  logOut(){
    this.dataStorageService.tokenBoolean.next(false);
    localStorage.removeItem("token")
    this.router.navigate(["/home"])
  }

}
