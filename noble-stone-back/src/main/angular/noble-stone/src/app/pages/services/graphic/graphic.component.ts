import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { item } from 'src/app/common/interfaces/app.interfaces';
import { DataStorageService } from 'src/app/common/services/data-storage.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent {
  
  @Input() graphicItems: item [] = []

  dataStorageService1:any;

  constructor(private dataStorageService: DataStorageService, private scroller: ViewportScroller){
    this.dataStorageService1 = dataStorageService;
    scroller.scrollToPosition([0,0])
  }


  ngOnInit(): void {
    
  }
}
