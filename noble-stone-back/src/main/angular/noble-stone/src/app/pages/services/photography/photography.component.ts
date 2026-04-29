import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { item } from 'src/app/common/interfaces/app.interfaces';
import { DataStorageService } from 'src/app/common/services/data-storage.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent {
  
  @Input() photographyItems: item [] = []
  
  dataStorageService1:any;

  constructor(private scroller: ViewportScroller, private dataStorageService: DataStorageService){
    this.dataStorageService1 = dataStorageService
    scroller.scrollToPosition([0,0])
  }


  goDown1(idTagElement:string) {
    this.scroller.scrollToAnchor(idTagElement);
  }

}
