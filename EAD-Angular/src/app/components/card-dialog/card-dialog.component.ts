import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrl: './card-dialog.component.scss'
})
export class CardDialogComponent {

  tempData : any = {
    'Testing-Cards' : [
      {
        'heading' : 'Unit Testing',
        'image': 'assets/png/ShieldUi.png',
        'subtext':'UI Lite'
      },
      {
        'heading' : 'Application Testing',
        'image': 'assets/png/Github.png',
        'subtext':'Application Lite'
      }
    ],
    'CICD-flow' : [
      {
        'heading' : 'Version Control',
        'image': 'assets/png/Github.png',
        'subtext':'Git Hub'
      },
      {
        'heading' : 'CI',
        'image': 'assets/png/Microsoft-Azure-DevOps.png',
        'subtext':'Azure Devops'
      },
      {
        'heading' : 'CD',
        'image': 'assets/png/Jenkins.png',
        'subtext':'Jenkins'
      },
      {
        'heading' : 'Cloud Platform',
        'image': 'assets/png/AWS.png',
        'subtext':'AWS'
      }
    ],
    'buld-tools': [
      {
        'heading' : 'Build Tool',
        'image': 'assets/png/Maven.png',
        'subtext':'Maven'
      },
      {
        'heading' : 'Code Quality',
        'image': 'assets/png/SonarQube.png',
        'subtext':'Sonar Qube 6.0'
      }
    ]
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log('THE DATA IS : ',data)
  }
}
