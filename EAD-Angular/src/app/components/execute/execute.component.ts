import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ExecuteService } from '../../services/execute.service'; 
import { LocalStorageService } from '../../services/local-storage.service';
import { response } from 'express';

@Component({
  selector: 'app-execute',
  templateUrl: './execute.component.html', 
  styleUrls: ['./execute.component.scss']
})
export class ExecuteComponent implements OnInit {

  dataSource: MatTableDataSource<any>; 

  jsonData: any[]= [] ;

  displayedColumns: string[] = ['changeNumber', 'totalEntities', 'inProgress','new','completed','onHold',
  'approved', 'rejected', 'actions']; 

  constructor(private service: ExecuteService, private router: Router , private storage:LocalStorageService) { }

  ngOnInit() {
    const UserId =  this.storage.userid.toString();
    const AccountId = this.storage.accountId.toString();
    //console.log(UserId);
    this.service.getChangeRequests(UserId,AccountId).subscribe({
      next: (response) => {
        this.jsonData= response;
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log("request completed") ;
       
      }
    })
  }

  

  autoDeployClicked(row: any) {
    console.log("Auto-deploy clicked for:", row);
    
  }

  deployClicked(row: any) {
    console.log("Deploy clicked for:", row);
    
  }

  isManager() {
    const role = this.storage.roles?.find(role => role.name.toLocaleLowerCase() === 'manager');
    if(!!role){
      return false ;
    }
    return true ;
  }



  isDeveloper() {
    const role = this.storage.roles?.find(role => role.name.toLocaleLowerCase() === 'developer');
    if(!!role){
      return false ;
    }
    return true ;
}
}


