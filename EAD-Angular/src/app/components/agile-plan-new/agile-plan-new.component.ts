import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AgilePlanService } from '../../services/agile-plan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CloudService } from '../../services/cloud.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CicdService } from '../../services/cicd.service';

@Component({
  selector: 'app-agile-plan-new',
  templateUrl: './agile-plan-new.component.html',
  styleUrl: './agile-plan-new.component.scss'
})
export class AgilePlanNewComponent {

  panelOpenState : boolean = true;

  cardInfo : any = {}

  value : string = '';
  section : string = 'CP';
  projectTitle : string = '';
 
  cicdTools : any = [];
  cicdCategory : any = [];
  toolsCategory : any = [];
  toolsData : any = [];
  constructor(private matIconRegistry: MatIconRegistry,
     private domSanitizer: DomSanitizer, 
     private agilePlan : AgilePlanService,
     private _route:ActivatedRoute,
     private cloudService : CloudService,
     private router : Router,
     private _snackBar: MatSnackBar,
     private cicdService : CicdService
     ){
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
    this.matIconRegistry.addSvgIcon(
      "tree-view",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/tree_view.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "new-tab",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/open_new_tab.svg")
    );
  }

  ngOnInit(){
    this.agilePlan.getList.subscribe(data=>{
      this.cardInfo = data;
    })

    this.agilePlan.getAgilePlanList();

    this._route.queryParams.subscribe(data=>{
      if(data['load']){
        this.agilePlan.selectedSection.next(data['load']);
      }
      if(data['projectName']){
        this.projectTitle = data['projectName'];
      }
      this.agilePlan.selectedSection.subscribe(section=>{
        this.section = section;
        if(section == 'CICD'){
          this.cicdService.cicdData.subscribe(data=>{
            this.cicdTools = data;
          });
          this.cicdService.cicdTools.subscribe(data=>{
            this.cicdCategory = data;
          })
          this.fetchCICDTools();
        }
      })
    })
    
  }

  preventDefaultBehaviour(event){
    this.panelOpenState = true;
  }

  getKeys():any {
    return Object.keys(this.cardInfo);
  }

  submitProposal(section : string){
    if(section == 'CP'){
      this.cloudService.setCloudInfra().subscribe(data=>{
        if(data['message']){
          this.openSnackBar('Cloud Infra Request Submitted Successfully','');
          setTimeout(() => {
          this.router.navigate(['provision'])
          }, 1000);
        }
      },
      error=>{
        this.openSnackBar('something went wrong','')
        console.log(error)
      }
      )
    }else if(section == 'CICD'){
      this.cicdService.submitCICDRequest().subscribe(data=>{
        if(data['message']){
          this.openSnackBar(data['message'],'');
          setTimeout(() => {
          this.router.navigate(['provision'])
          }, 1000);
          this.cicdCategory = [];
          this.cicdService.resetCICDCategory();
        }
      },
      error=>{
        this.openSnackBar('something went wrong','')
        console.log(error)
      }
      )
    }
  }

  openSnackBar(message: string, action: string) { 
    this._snackBar.open(message, action, { 
      duration: 2000, 
    }); 
  } 

  redirectToMapView(){
    this.router.navigate(['map-view']);
  }

  fetchCICDTools(){
    this.cicdService.getCICDTools();
  }

  ngOnDestroy(){
    this.agilePlan.selectedSection.next('CP');
  }

}
