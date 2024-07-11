import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AgilePlanService } from '../../services/agile-plan.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {
  projectDetails : any = {}
  selectedSection : any = '';
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private service : ProjectService, private _route : ActivatedRoute,
    private agilePlanService : AgilePlanService
    ){
    this.matIconRegistry.addSvgIcon(
      "provision-logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/card-icons/assignment_ind_black_24dp.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "agile-plan-logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/card-icons/polyline_black_24dp.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "execute-logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/card-icons/published_with_changes_black_24dp.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "analytics-logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/card-icons/insights_black_24dp.svg")
    );
  }


  ngOnInit(){
    if(localStorage.getItem('projectDetails')){
      this.projectDetails = JSON.parse(localStorage.getItem('projectDetails'));
      console.log('PROJECT DETAILS ARE : ',this.projectDetails)
    }

    this.agilePlanService.selectedSection.subscribe(data=>{
      this.selectedSection = data;
    })

    this._route.queryParams.subscribe(data=>{
      if(data['load']){
        this.agilePlanService.selectedSection.next(data['load']);
      }
    })
  }

  

}
