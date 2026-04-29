import { Component, OnInit } from '@angular/core';
import { Tabs } from 'flowbite';
import type { TabsOptions, TabsInterface, TabItem } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import { item } from 'src/app/common/interfaces/app.interfaces';
import { DataStorageService } from 'src/app/common/services/data-storage.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{

    allItems: item[] = [];

    constructor(private dataStorageService: DataStorageService){
        this.allItems = dataStorageService.staticItems;
    }

  ngOnInit(): void {
    const tabsElement: any = document.getElementById('default-tab');

// create an array of objects with the id, trigger element (eg. button), and the content element
    const tabElements: any[] = [
        {
            id: 'graphics',
            triggerEl: document.querySelector('#graphics-tab'),
            targetEl: document.querySelector('#graphics'),
        },
        {
            id: 'website',
            triggerEl: document.querySelector('#website-tab'),
            targetEl: document.querySelector('#website'),
        },
        {
            id: 'photography',
            triggerEl: document.querySelector('#photography-tab'),
            targetEl: document.querySelector('#photography'),
        },
        {
            id: 'videography',
            triggerEl: document.querySelector('#videography-tab'),
            targetEl: document.querySelector('#videography'),
        },
    ];

// options with default values
    const options: TabsOptions = {
        defaultTabId: 'graphics',
        activeClasses:
            'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
        inactiveClasses:
            'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
        onShow: () => {
            console.log('tab is shown');
        },
    };

// instance options with default values
    const instanceOptions: InstanceOptions = {
      id: 'default-tab',
      override: true
    };

/*
* tabsElement: parent element of the tabs component (required)
* tabElements: array of tab elements (required)
* options (optional)
* instanceOptions (optional)
*/
    const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);

// open tab item based on id
    tabs.show('graphics');
  }
}


