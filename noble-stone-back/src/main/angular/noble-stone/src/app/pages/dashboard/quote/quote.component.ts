import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/common/components/spinner/spinner.service';
import { quote } from 'src/app/common/interfaces/app.interfaces';
import { DataStorageService } from 'src/app/common/services/data-storage.service';
import { HttpclientService } from 'src/app/common/services/httpclient.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
    QUOTECHECKOUT: quote[] = [];


    constructor(private spinner: SpinnerService, 
        private dataStorageService: DataStorageService,
        private httpclientService: HttpclientService){
            this.fetchQuotes();
        }
        
        
    onDone(element:quote){
        element.action = true;
        this.spinner.showSpinner();
        this.httpclientService.postRequest<any>("/api/quotes/savequote",element).subscribe((response: any) =>{
            this.spinner.hideSpinner();
        },(error:any)=>{
            console.log("Error Quote Save :", error);
            this.spinner.hideSpinner();
        })
    }

    removeQuote(element: quote){
        this.spinner.showSpinner();
        this.httpclientService.postRequest<any>("/api/quotes/removequote",element).subscribe((response: any) =>{
            this.spinner.hideSpinner();
            this.fetchQuotes(); 
        },(error:any)=>{
            console.log("Error Quote Save :", error);
            this.spinner.hideSpinner();
        })
    }


    fetchQuotes(){
        this.spinner.showSpinner();
        this.httpclientService.getRequest<any>("/api/quotes/getallquotes").subscribe((response: any) =>{
            this.QUOTECHECKOUT = response;
            this.spinner.hideSpinner();
        
        },(error:any)=>{
            console.log("Error Quote fetch :", error);
            this.spinner.hideSpinner();
        })
    }


    showHideRow(row: string): void {
        console.log(">>>", row)
        const element = document.getElementById('#'+row);
        if (element) {
            element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'table-row' : 'none';
        }
    }


}

export const QUOTECHECKOUT: any = {
  id: 11,
  action: false,
  date: new Date(),
  name: "Tumelo",
  surname: "Khoza",
  email: "tumelokhoza3@gmail.com",
  phone: "0743266547",
  message: "Dear team, I Hope this message find you well. I would like to book a service for photoshot on the specified special",
  items: [{
      id: 1,
      itemName: "Corporate Identity Pack 1",
      itemCategory: "graphics",
      itemSubCategory: "Corporate Identity Designs",
      itemPrice: 3160,
      itemList: [
          "X2 Unique Options",
          "X1 Final Logo Design",
          "Business Card Design",
          "Letterhead Design",
          "Email Signature Design",
          "2 Revision Rounds"
      ]
  }, {
      id: 11,
      itemName: "Company Profile",
      itemCategory: "graphics",
      itemSubCategory: "Print & Digital Media Designs",
      itemPrice: 6150,
      itemList: [
          "X2 Unique Options",
          "X1 Final Concept",
          "Concept Printable Files Supplied",
          "2 Revision Rounds"
      ]
  },{
      id: 22,
      itemName: "3 Page Custom Website",
      itemCategory: "website",
      itemSubCategory: "Website Design Prices & Packages",
      itemPrice: 5180,
      itemList: [
          "Domain Administration",
          "1 x Custom Design To Choose From",
          "2 x Free Design Revision Rounds",
          "2 x Free Content Revision Rounds",
          "3 x Static Pages",
          "Fully Mobile Responsive",
          "Google Friendly (SEO)",
          "Enquiry Form",
          "Google Map",
          "Moving Banner",
          "Pop Up Image Gallery",
          "Video Gallery",
          "WhatsApp Quick Chat",
          "Social Media Buttons",
          "Basic SEO & Google Index",
          "Manage Own Content",
          "Website Editing Training",
          "Standard Scroll Animations",
      ]
  }
]
}

export const QUOTES: any[] = [QUOTECHECKOUT,
    {
        id: 12,
        action: true,
        date: new Date(),
        name: "Tumelo2",
        surname: "Khoza 2",
        email: "tumelokhoza2@gmail.com",
        phone: "0743266547",
        message: "Dear team, I Hope this message find you well. I would like to book a service for photoshot on the specified special",
        items: [{
            id: 1,
            itemName: "Corporate Identity Pack 1",
            itemCategory: "graphics",
            itemSubCategory: "Corporate Identity Designs",
            itemPrice: 3160,
            itemList: [
                "X2 Unique Options",
                "X1 Final Logo Design",
                "Business Card Design",
                "Letterhead Design",
                "Email Signature Design",
                "2 Revision Rounds"
            ]
        }, {
            id: 11,
            itemName: "Company Profile",
            itemCategory: "graphics",
            itemSubCategory: "Print & Digital Media Designs",
            itemPrice: 6150,
            itemList: [
                "X2 Unique Options",
                "X1 Final Concept",
                "Concept Printable Files Supplied",
                "2 Revision Rounds"
            ]
        },{
            id: 22,
            itemName: "3 Page Custom Website",
            itemCategory: "website",
            itemSubCategory: "Website Design Prices & Packages",
            itemPrice: 5180,
            itemList: [
                "Domain Administration",
                "1 x Custom Design To Choose From",
                "2 x Free Design Revision Rounds",
                "2 x Free Content Revision Rounds",
                "3 x Static Pages",
                "Fully Mobile Responsive",
                "Google Friendly (SEO)",
                "Enquiry Form",
                "Google Map",
                "Moving Banner",
                "Pop Up Image Gallery",
                "Video Gallery",
                "WhatsApp Quick Chat",
                "Social Media Buttons",
                "Basic SEO & Google Index",
                "Manage Own Content",
                "Website Editing Training",
                "Standard Scroll Animations",
            ]
        }
    ]
}

]


