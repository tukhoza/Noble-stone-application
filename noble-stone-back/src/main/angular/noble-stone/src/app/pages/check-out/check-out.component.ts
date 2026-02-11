import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/common/components/spinner/spinner.service';
import { item, QUOTECHECKOUT } from 'src/app/common/interfaces/app.interfaces';
import { DataStorageService } from 'src/app/common/services/data-storage.service';
import { HttpclientService } from 'src/app/common/services/httpclient.service';
import { Tabs } from 'flowbite';
import type { TabsOptions, TabsInterface, TabItem } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit{

  displayedColumns: string[] = ['service', 'package', 'list', 'price'];
  dataSource = new MatTableDataSource<item>(QUOTECHECKOUT.items);
  // selection = new SelectionModel<item>(true, []);


  quote:any

  quoteFormGroup: FormGroup;
  toggle:any


  dataStorageService1:any;

  constructor(private _formBuilder: FormBuilder, 
              private spinner: SpinnerService, 
              private dataStorageService: DataStorageService,
              private httpclientService: HttpclientService) {

    this.quote = dataStorageService.quoteRequestItems;
    this.dataStorageService1 = dataStorageService;

    this.quoteFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
      date: [new Date()],
      action: [false],
      items: [this.quote]
    });
  }

  ngOnInit() {

    console.log("quote >>>", this.quote)
    const tabsElement: any = document.getElementById('default-tab');
    const tabElements: any[] = [
        {
          id: 'confirm',
          triggerEl: document.querySelector('#confirm-tab'),
          targetEl: document.querySelector('#confirm'),
        },
        {
            id: 'client',
            triggerEl: document.querySelector('#client-tab'),
            targetEl: document.querySelector('#client'),
        },
        {
            id: 'done',
            triggerEl: document.querySelector('#done-tab'),
            targetEl: document.querySelector('#done'),
        }
    ];

    const options: TabsOptions = {
        defaultTabId: 'confirm',
        activeClasses:
            'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
        inactiveClasses:
            'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
        onShow: () => {
            console.log('tab is shown');
        },
    };

    const instanceOptions: InstanceOptions = {
      id: 'default-tab',
      override: true
    };

    const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);
    this.toggle = tabs

    tabs.show('confirm');

  }

  submitQuote(){

    if (!this.quoteFormGroup.invalid){
      this.spinner.showSpinner();
      this.httpclientService.postRequest<any>("/api/quotes/savequote",this.quoteFormGroup.value).subscribe((response: any) =>{

        this.spinner.hideSpinner();
        this.dataStorageService.quoteRequestItems = [];
        this.dataStorageService.clientQuoteItems.next(0)
        this.toggle.show("done");
        
      },(error:any)=>{
        console.log("Error Quote Save :", error);
        this.spinner.hideSpinner();
      })
    }
  }
}
