import { Component, OnInit } from '@angular/core';
import { TabsOptions, InstanceOptions, TabsInterface, Tabs } from 'flowbite';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.scss']
})
export class StaticsComponent implements OnInit {
  
  constructor(){
    console.log("Static component is loading")
  }

  ngOnInit(): void {

    const tabsElement: any = document.getElementById('fullWidthTab');
        const tabElements: any[] = [
            {
              id: 'stats',
              triggerEl: document.querySelector('#stats-tab'),
              targetEl: document.querySelector('#stats'),
            },
            {
                id: 'about',
                triggerEl: document.querySelector('#about-tab'),
                targetEl: document.querySelector('#about'),
            },
            {
                id: 'faq',
                triggerEl: document.querySelector('#faq-tab'),
                targetEl: document.querySelector('#faq'),
            }
        ];
    
        const options: TabsOptions = {
            defaultTabId: 'stats',
            activeClasses:
                'text-gray-300 hover:text-[#464d77ff] dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
            inactiveClasses:
                'text-gray-500 hover:text-[#464d77ff] dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
            onShow: () => {
                console.log('tab is shown');
            },
        };
    
        const instanceOptions: InstanceOptions = {
          id: 'fullWidthTab',
          override: true
        };
    
        const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);

        tabs.show('stats');
  }
}
