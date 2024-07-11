import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgilePlanService {
  
  getList : Subject<any> = new Subject<any>();

  selectedSection : BehaviorSubject<any> = new BehaviorSubject('CP');

  agilePlanList : any = {
    'Continuos Integration' : [
      // {
      //   'category' : 'Unit Testing',
      //   'image': 'assets/png/ShieldUi.png',
      //   'service':'UI Lite',
      //   'version' : '1.1',
      //   'shared' : 0
      // },
      // {
      //   'category' : 'Application Testing',
      //   'image': 'assets/png/Github.png',
      //   'service':'Application Lite',
      //   'version' : '1.1',
      //   'shared' : 0
      // }
    ],
    'Continuos Deployment' : [
      // {
      //   'category' : 'Version Control',
      //   'image': 'assets/png/Github.png',
      //   'service':'Git Hub',
      //   'version' : '1.1',
      //   'shared' : 0
      // },
      // {
      //   'category' : 'CI',
      //   'image': 'assets/png/Microsoft-Azure-DevOps.png',
      //   'service':'Azure Devops',
      //   'version' : '1.1',
      //   'shared' : 0
      // },
      // {
      //   'category' : 'CD',
      //   'image': 'assets/png/Jenkins.png',
      //   'service':'Jenkins',
      //   'version' : '1.1',
      //   'shared' : 0
      // },
      // {
      //   'category' : 'Cloud Platform',
      //   'image': 'assets/png/AWS.png',
      //   'service':'AWS',
      //   'version' : '1.1',
      //   'shared' : 0
      // }
    ],
    'Cloud Platform': [
      // {
      //   'category' : 'Build Tool',
      //   'image': 'assets/png/Maven.png',
      //   'service':'Maven',
      //   'version' : '1.1',
      //   'shared' : 0
      // },
      // {
      //   'category' : 'Code Quality',
      //   'image': 'assets/png/SonarQube.png',
      //   'service':'Sonar Qube 6.0',
      //   'version' : '1.1',
      //   'shared' : 0
      // }
    ],
    'Tools' : [

    ]
  }

  constructor() {
    this.getList.next(this.agilePlanList);
   }


  getAgilePlanList(){
    this.getList.next(this.agilePlanList);
  }

  addNewCardToList(category,item){
    console.log("====",category,item)
    this.agilePlanList[category].push({
      ...item,
      'image': 'assets/png/Microsoft-Azure-DevOps.png'
    });

    console.log('THE AGILE PLAN LIST : ', this.agilePlanList[category])
    this.getList.next(this.agilePlanList);
  }

  removeCardFromList(category,item){
   this.agilePlanList[category] =  this.agilePlanList[category].filter(element=>item.category != element.category);
   console.log('THE ELEMEJTS : ', this.agilePlanList)
   this.getList.next(this.agilePlanList)
  }


}
