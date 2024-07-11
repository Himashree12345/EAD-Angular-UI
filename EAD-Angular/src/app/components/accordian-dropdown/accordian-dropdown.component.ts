import { Component, Input } from '@angular/core';
import { CloudService } from '../../services/cloud.service';

@Component({
  selector: 'app-accordian-dropdown',
  templateUrl: './accordian-dropdown.component.html',
  styleUrl: './accordian-dropdown.component.scss'
})
export class AccordianDropdownComponent {

  @Input('cardInfo') cardInfo: any;
  @Input('key') key: string;
  panelOpenState: boolean = true;
  showListView: boolean = false;
  addCard: boolean = false;

  @Input('cicdInfo') cicdInfo;
  @Input('cicdData') cicdData;
  

  filtersData: any = [
    {
      'name': 'Build Tools',
      'id': 1,
      'imgURL': 'assets/png/ShieldUi.png',
      'service': [
        {
          'name': 'JUnit',
          'id': 1,
          'versions': [
            {
              'id': 1,
              'no': '1.1'
            },
            {
              'id': 2,
              'no': '1.2'
            },
            {
              'id': 3,
              'no': '1.3'
            }
          ]
        },
        {
          'name': 'JMeter',
          'id': 2,
          'versions': [
            {
              'id': 1,
              'no': '2.1'
            },
            {
              'id': 2,
              'no': '2.1'
            },
            {
              'id': 3,
              'no': '3.1'
            }
          ]
        },
        {
          'name': 'Cypress',
          'id': 3,
          'versions': [
            {
              'id': 1,
              'no': '1.1'
            }
          ]
        }
      ]
    },
    {
      'name': 'Unit Testing',
      'id': 2,
      'imgURL': 'assets/png/ShieldUi.png',
      'service': [
        {
          'name': 'JUnit',
          'id': 1,
          'versions': [
            {
              'id': 1,
              'no': '1.1'
            },
            {
              'id': 2,
              'no': '1.2'
            },
            {
              'id': 3,
              'no': '1.3'
            }
          ]
        },
        {
          'name': 'JMeter',
          'id': 2,
          'versions': [
            {
              'id': 1,
              'no': '2.1'
            },
            {
              'id': 2,
              'no': '2.1'
            },
            {
              'id': 3,
              'no': '3.1'
            }
          ]
        },
        {
          'name': 'Cypress',
          'id': 3,
          'versions': [
            {
              'id': 1,
              'no': '1.1'
            }
          ]
        }
      ]
    },
    {
      'name': 'Code Quality',
      'id': 3,
      'imgURL': 'assets/png/ShieldUi.png',
      'service': [
        {
          'name': 'JUnit',
          'id': 1,
          'versions': [
            {
              'id': 1,
              'no': '1.1'
            },
            {
              'id': 2,
              'no': '1.2'
            },
            {
              'id': 3,
              'no': '1.3'
            }
          ]
        },
        {
          'name': 'JMeter',
          'id': 2,
          'versions': [
            {
              'id': 1,
              'no': '2.1'
            },
            {
              'id': 2,
              'no': '2.1'
            },
            {
              'id': 3,
              'no': '3.1'
            }
          ]
        },
        {
          'name': 'Cypress',
          'id': 3,
          'service': [
            {
              'name': 'JUnit',
              'id': 1,
              'versions': [
                {
                  'id': 1,
                  'no': '1.1'
                },
                {
                  'id': 2,
                  'no': '1.2'
                },
                {
                  'id': 3,
                  'no': '1.3'
                }
              ]
            },
            {
              'name': 'JMeter',
              'id': 2,
              'versions': [
                {
                  'id': 1,
                  'no': '2.1'
                },
                {
                  'id': 2,
                  'no': '2.1'
                },
                {
                  'id': 3,
                  'no': '3.1'
                }
              ]
            },
            {
              'name': 'Cypress',
              'id': 3,
              'versions': [
                {
                  'id': 1,
                  'no': '1.1'
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  cloudPlatFormList: any = [];

  cloudPlatform: any = {
    name: '',
    icon: '',
    services: []
  }
// The below object is for submit api of cloud infra resources
  selectedCloudInfra: any = {
    "userId": "",
    "area": "",
    "projectId": "",
    "categoryName": "",
    "categoryId": "",
    "platform": [
      {
        "platformId": "",
        "platformName": "",
        "resources": [
        ]
      }
    ]

  }

  addCloudService: boolean = false;

  addNewCloudService: boolean = false;

  service: any;

  platformResources: any = [];

  constructor(private cloudservice: CloudService) {

  }

  ngOnInit() {
    this.service = this.cloudservice;
    if(this.service.cloudCategories.length==0){
      this.service.getCloudCategories();
    }
  }

  showDetailListView(event: any): any {
    this.showListView = !this.showListView;
    this.addCard = false;
    // event.stopPropgation();
  }

  addNewCard() {
    this.showListView = true;
    this.addCard = true;
  }

  addNewCardToList(event) {
    console.log("THE EVENT IS : ", event)
  }

  setCloudPlatform(event: any) {
    this.service.setCloudInfraName(event.categoryName);
    // this.cloudPlatform.name = this.service.cloudInfra.name;
    // this.cloudPlatform.icon = event.icon;
    this.service.getInfraDetails();
    // console.log(this.service.cloudInfra)
  }

  /**
   * The below functio will enable the new resource to be added to the selected service 
   * when you click on add new empty card for cloud platform section
   */

  addCloudServiceNew() {
    this.addNewCloudService = true;
  }

  selectCloudInfra(event: any) {
    let item = {
      infraName: this.service.cloudInfra.name,
      platformId: event.platformId,
      resourceId: event.resourceId
    }
    this.service.addInfrService(item);
    this.addNewCloudService = false;
  }

  resetCloudinfra() {
    this.service.cloudInfra.name = '';
    this.cloudPlatform.icon = '';
  }

  getCloudInfraPlatformList() {
  }

  getCloudInfraName() {
    return this.service.cloudInfra.name;
  }

  getInfraPlatformCategory() {
  }

  setCloudInfraPlatform(event: any) {

  }

  /**
   * The Below function will Initialize the selectedCloudPlatform
   * @param resource 
   */
  setCloudInfraPlatformResource(resource: any) {
    let userProfile = JSON.parse(localStorage.getItem('userProfile'));
    let project = JSON.parse(localStorage.getItem('projectDetails'));
    this.selectedCloudInfra['userId'] = userProfile.id;
    this.selectedCloudInfra['area'] = 'Cloud Infra';
    this.selectedCloudInfra['projectId'] = project.projectId;
    this.selectedCloudInfra['categoryName'] = this.service.cloudInfra.name;
    this.selectedCloudInfra['categoryName'] = this.service.cloudInfra.name;
    this.selectedCloudInfra['categoryId'] = 1;
    this.selectedCloudInfra['platform'] = [
      {
        "platformId": resource.platformId,
        "platformName": resource.platformName,
        "resources": this.platformResources
      }
    ];
  }

  /**
   * The below function will add the resource to the cloud platform
   * @param resource 
   */

  addCloudInfraResource(resource: any) {
    this.platformResources.push(resource)
    this.selectedCloudInfra['platform'][0]['resources'] = this.platformResources;
    this.addNewCloudService = false;
    this.updateSelectedCloudInfraInService();
  }

  /**
   * The below function will remove the deleted resource in cloud platform
   * @param resource 
   */
  removeSelectedCloudInfraPlatformResource(resource: any) {
    this.platformResources = this.platformResources.filter(item => item.resourceId !== resource.resourceId);
    this.selectedCloudInfra['platform'][0]['resources'] = this.platformResources;
    this.updateSelectedCloudInfraInService();
  }

  ngOnDestroy() {
    this.service.selectCloudInfra = {};
    this.service.cloudInfra.name = '';
  }

  updateSelectedCloudInfraInService() {
    this.cloudservice.selectedCloudInfra = this.selectedCloudInfra;
  }

  getCI(){
    return this.cicdInfo.filter(item=>item.category == 'CI');
  }

  getCD(){
    return this.cicdInfo.filter(item=>item.category == 'CD');

  }


}
