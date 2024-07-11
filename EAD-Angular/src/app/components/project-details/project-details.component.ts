import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit{

  dynamicProjectName: string = '';

  tools : any = [
    {
      icon : '../../../assets/png/infra.png',
      name : 'Infrastructure',
      link : 'home/agile-plan-new',
      content : 'CP'
    },
    {
      icon : '../../../assets/png/cicd.png',
      name : 'CI/CD',
      link : 'home/agile-plan-new',
      content : 'CICD'
    },
    {
      icon : '../../../assets/png/test-automation.png',
      name : 'Test Automation',
      link : 'home/test-automation'
    },
    {
      icon : '../../../assets/png/operations.png',
      name : 'Operations',
      link : 'home/operations'
    },
    {
      icon : '../../../assets/png/Maven.png',
      name : 'Map View',
      link : 'map-view'
    }
  ];


  constructor(private _router : Router, private route: ActivatedRoute){

  }

  ngOnInit(): void{
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.dynamicProjectName = params.get('projectName') || '';
    });
  }



  navigateTo(tool : any){
    let url = this.tools.filter(item=>item.name == tool.name);
    this._router.navigate([url[0].link],{ queryParams: {'load': url[0]?.content || ''}})
  }

}
