import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProvisionService } from '../../services/provision.service';
import { ChangeRequest } from '../../models/changeRequest';
import { LocalStorageService } from '../../services/local-storage.service';


interface dataSource{
  changeRequestNumber:string;
  ProjectName: string;
  createdDate: string;
  status: string;
  action: string;
}

@Component({
  selector: 'app-provision',
  templateUrl: './provision.component.html',
  styleUrl: './provision.component.scss',
})
export class ProvisionComponent {

  projectManager: boolean = true;
  cardList: any = [
    {
      'category': 'Version Control',
      'image': 'assets/png/Github.png',
      'service': 'Git Hub',
      'version': '1.1',
      'shared': 0
    },
    {
      'category': 'CI',
      'image': 'assets/png/Microsoft-Azure-DevOps.png',
      'service': 'Azure Devops',
      'version': '1.1',
      'shared': 0
    },
    {
      'category': 'CD',
      'image': 'assets/png/Jenkins.png',
      'service': 'Jenkins',
      'version': '1.1',
      'shared': 0
    },
    {
      'category': 'Cloud Platform',
      'image': 'assets/png/AWS.png',
      'service': 'AWS',
      'version': '1.1',
      'shared': 0
    }
  ]

  constructor(private service: ProvisionService, private router: Router, private storage: LocalStorageService) { }

  displayedColumns: String[];
  dataSource: any[]=[];

  ngOnInit() {

    /* this.displayedColumns = ['changeRequestNumber', 'ProjectName', 'createdDate', 'status', 'action']; */
    let isDeveloper = this.storage.roles?.find(role => role.name.toLocaleLowerCase() === 'developer');

    this.service.getChangeRequests(this.storage.userid, !!isDeveloper).subscribe({
      next: (response: any[]) => {
        this.dataSource = response;
      }
    });
  }
  viewDetailsClicked(row) {
    this.router.navigate(['/provision/details', row.changeNumber]);
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Pending':
        return 'orange';
      case 'Rejected':
        return 'red';
      case 'Approved':
        return 'green';
      default:
        return 'transparent';
    }
  }


}
