import { Component, Input } from '@angular/core';
import { item } from 'src/app/common/interfaces/app.interfaces';
import { DataStorageService } from 'src/app/common/services/data-storage.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent {

  @Input() websiteItems: item [] = []
  dataStorageService1:any;

  constructor(private dataStorageService: DataStorageService){
    this.dataStorageService1 = dataStorageService;
  }
}
