import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input('cardInfo') cardInfo: any;
  @Input('cardFor') cardFor: any;
  @Input('showListView') showListView : false;

  @Input('cloudPlatform') cp : boolean = false;

  @Output('cloudPlatForms')  setCloudPlatform = new EventEmitter<any>();

  cloudServiceNewCard : boolean = false;

  icons : any = {
 
      'Azure': '../../../assets/png/Microsoft-Azure-DevOps.png',
      'AWS': '../../../assets/png/AWS.png',
      'Google': '../../../assets/png/google.png'
  }

  constructor(public dialog: MatDialog) {

  }

  openDialog(cardInfo,cardFor) {
    const dialogRef = this.dialog.open(CardDialogComponent, {
      data : {cardInfo : cardInfo,'cardFor':cardFor},
      width: '222px',
      minHeight: '766px ',
      position : {
      right: '10px'
    }
    
  });

  dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
  });
}

cloudPlatform(cardInfo : any){
    this.setCloudPlatform.emit(cardInfo)
}

addNewCloudService(){
  this.cloudServiceNewCard = true;
}




}
