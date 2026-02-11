import { Component, OnInit } from '@angular/core';
import { Tabs } from 'flowbite';
import type { TabsOptions, TabsInterface, TabItem } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent  implements OnInit {


  ngOnInit(): void {
    const tabsElement: any = document.getElementById('default-tab');
        const tabElements: any[] = [
            {
              id: 'all',
              triggerEl: document.querySelector('#all-tab'),
              targetEl: document.querySelector('#all'),
            },
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
            }
        ];
    
        const options: TabsOptions = {
            defaultTabId: 'all',
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

        tabs.show('all');
  }

}
