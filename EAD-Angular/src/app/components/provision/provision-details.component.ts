import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProvisionService } from '../../services/provision.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { changeRequestDetail } from '../../models/model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-provision-details',
  templateUrl: './provision-details.component.html',
  styleUrl: './provision-details.component.scss'
})
export class ProvisionDetailsComponent {

  constructor(private route: ActivatedRoute, private provisionService: ProvisionService,
    private storage: LocalStorageService, private provDet: ProvisionService, private rout: Router,  private _snackBar: MatSnackBar
    ) { }
  private routeSub: Subscription;
  changeReqNumber: string;
  changeReqDetail: changeRequestDetail;
  getManager: boolean = false
  ngOnInit() {
    let isManager = this.storage.roles?.find(role => role.name.toLocaleLowerCase() === 'manager');
    if (!!isManager) {
      this.getManager = true
    }
    this.routeSub = this.route.params.subscribe(params => {
      this.changeReqNumber = params['crNumber'];
      this.provisionService.getChangeRequestDetails(this.storage.userid, this.changeReqNumber)
        .subscribe({
          next: (data) => {
            this.changeReqDetail = data;
            console.log(this.changeReqDetail.requests)
         }        });
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  temp:boolean;
  name()
  {
    this.temp=!this.temp
  }
  status: boolean = false;
  toggle: boolean = false;
  toggleIt() {
    if (this.toggle == true) {
      this.button.setAttribute('disabled', '');
      this.button.classList.add('disabled-style');
    }
    this.toggle = !this.toggle;
    this.status = false
  }
  isAccepted: boolean;
  isRejected: boolean;
  disabled: boolean = false
  openSnackBar(message: string, action: string) { 
    this._snackBar.open(message, action, { 
      duration: 2000, 
    }); 
  } 
  accept() {
    if (this.toggle == true) {
      this.button.setAttribute('disabled', '');
      this.button.classList.add('disabled-style');
    }
    this.isAccepted = true;
    this.isRejected = false;
    this.provDet.approveRequest(this.changeReqNumber).subscribe({
      next: (response) => {
        if(response){
          this.openSnackBar("Change request Approved",'');
          setTimeout(() => {
          this.rout.navigate(['provision'])
          }, 1000);
      }},
    })
  }
  isPending() {
    if (this.changeReqDetail.state == 'Pending') {
      return false;
    }
    if (this.changeReqDetail.state == "Approved") {
      this.isAccepted = true;
      this.isRejected = false;
      return true;
    }
    else if (this.changeReqDetail.state == "Rejected") {
      this.isAccepted = false;
      this.isRejected = true;
      return true;
    }
    return true
  }
  remarks: String;
  reject() {
    this.isAccepted = false;
    this.isRejected = true;
    this.provDet.rejectRequest(this.changeReqNumber, this.remarks).subscribe({
      next: (response) => {
          if(response){
            this.openSnackBar("Change request Rejected",'');
            setTimeout(() => {
            this.rout.navigate(['provision'])
            }, 1000);
      }},
  })
  }
  handleCrossClick() {
    this.toggle = !this.toggle
    this.button.setAttribute('enabled', '')
  }
  button = document.getElementById('rejButton')
}
function isManage(crNumber: string) {
  throw new Error('Function not implemented.');
}

