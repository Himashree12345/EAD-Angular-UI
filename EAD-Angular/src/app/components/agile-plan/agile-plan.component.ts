import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {Location} from '@angular/common';

@Component({
  selector: 'app-agile-plan',
  templateUrl: './agile-plan.component.html',
  styleUrl: './agile-plan.component.scss'
})
export class AgilePlanComponent {
  cardInfo : any = {
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

  constructor(private matIconRegistry: MatIconRegistry,
    private _location : Location,
    private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "left-arrow",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/left_arrow.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "right-arrow",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/right_arrow.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "down-left-arrow",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/down_left_arrow.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "down-right-arrow",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/down_right_arrow.svg")
    );
  }

  goBack(){
    this._location.back();
  }

}
