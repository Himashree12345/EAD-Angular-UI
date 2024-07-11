import { Component, Input } from '@angular/core';
import { AgilePlanService } from '../../services/agile-plan.service';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-breadcum',
  templateUrl: './breadcum.component.html',
  styleUrl: './breadcum.component.scss'
})
export class BreadcumComponent {
@Input('title') title = 'All Projects';
@Input('projectName') projectName;
@Input('subheading') subheading = '';
@Input('section') selectedValue;

// selectedValue: string;
  selectedCar: string = 'infra';

  categories: any[] = [
    {value: 'CP', viewValue: 'Infrastructure'},
    {value: 'Tools', viewValue: 'CICD'},
    {value: 'CICD', viewValue: 'Tools'},
    {value: 'security', viewValue: 'Test Automation'},
    {value: 'operations', viewValue : 'Operations'}
  ];

  constructor(private agileService : AgilePlanService){

  }

  updateSelectedSection(){
    this.agileService.selectedSection.next(this.selectedValue);
  }
}
