import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(public dialog: MatDialog) {}

  showSpinner(): void {
    this.dialog.open(SpinnerComponent, {
      
    }).disableClose = true;
  }

  hideSpinner(){
    this.dialog.closeAll();
  }

}
