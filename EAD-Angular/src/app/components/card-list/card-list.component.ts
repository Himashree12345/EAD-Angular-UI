import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AgilePlanService } from '../../services/agile-plan.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CloudService } from '../../services/cloud.service';
import { CicdService } from '../../services/cicd.service';

interface ICloudInfra {
  name : string,
  platform : string,
  resource : string
}

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CardListComponent {

  @Input('cardInfo') cardInfo: any;
  @Input('key') key: any;
  @Input('addNew') addNew: boolean;
  @Input('filterData') filterData: any;
  @Output('addCard') addCard: EventEmitter<any> = new EventEmitter<any>();
  @Input('provisionCard') provisionCard : boolean;
  @Input('projectManager') projectManager : boolean;
  @Input('provisionCardStatus') provisionCardStatus : boolean;
  @Input('addNewCloudService') addNewCloudService : boolean;

  // the input item of selected Colud platform resource
  @Input('cloudItem') cloudItem;

  @Output('cloudInfraSelect') cloudInfraSelect : EventEmitter<any> = new EventEmitter<any>();


  // This is the whole object of selected Cloud Infra
  @Input('selectedInfra') selectedCloudInfra : any;

  // This will emit selected cloud infra resource upon selection (add resource)
  @Output('emitSelectedCloudInfraResource') emitSelectedCloudInfra : EventEmitter<any> = new EventEmitter<any>();

  // This will emit to delete the selected resource from the list (delete resource)
  @Output('deleteSelectedCloudInfraPlatformResource') deleteSelectedCloudInfraResource : EventEmitter<any> = new EventEmitter<any>();


  icons : any = {
 
    'Azure': '../../../assets/png/Microsoft-Azure-DevOps.png',
    'AWS': '../../../assets/png/AWS.png',
    'Google': '../../../assets/png/google.png'
}

infraIcon : string;

    selectedObj : any = {
      toolName : '',
      version : ''
    }

  provisonSearch: string = '';

  editCard = false;

  newCardData: any = {
    category: '',
    service: '',
    version: '',
    shared: 0
  }

  filterObj: any = {
    category: '',
    services: [],
    versions: []
  }

  myControl = new FormControl('');
  provisonCtrl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];


  // selectedCloudInfra : any = {
  //   infraName : '',
  //   platformId : '',
  //   resourceId : ''
  // }

  filteredOptions: Observable<string[]>;

  cicdList : any = [];

  constructor(public agilePlanService: AgilePlanService,
              private _cicdService: CicdService,
              public cloudService : CloudService) {

  }

  ngOnInit() {
    this.provisonCtrl.valueChanges.subscribe(data=>{
      // console.log('kkkkk :   ', data)
      if (this.provisonSearch == '') {
        this.filterObj.services = this.getProvision(this.filterObj.category);
      } else {
        this.filterObj.services = this.filterObj.services.filter(item => item.name.toLowerCase().includes(this.provisonSearch));
      }
    })
    // this.provisonCtrl.valueChanges(change=>console.log(change))
    this.infraIcon =  this.icons[this.cloudService.selectedCloudInfra.categoryName];
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    let res = this.options.filter(option => option['name'].toLowerCase().includes(filterValue));
    console.log('THE RESULT IS : ', res)
    return res;
  }

  addNewCard() {
    this.addNew = true;
  }

  cancelCard() {
    this.addNew = false;
    this.editCard = false;
  }

  getProvision(category: any, search?: boolean) {
    let res: any;
    if (search) {
      res = this.filterData.filter(item => item.name == category).map(data => data.service);
      res = res.filter(service => service.name.includes(this.provisonSearch));
      res[0];
    } else {
      res = this.filterData.filter(item => item.name == category).map(data => data.service);
      return res[0];
    }
  }

  getVersions(toolName: any) {
    let res: any = this.filterData[0]['tools'].filter(item => item.toolName == this.selectedObj.toolName).map(data => data.versions);
    if (res.length > 0) {
      return res[0];
    } else {
      return []
    }
  }

  incrementMembers() {
    this.newCardData.shared = this.newCardData.shared + 1;
  }

  decrementMembers() {
    if (this.newCardData.shared > 0) {
      this.newCardData.shared = this.newCardData.shared - 1;
    } else {
      this.newCardData.shared = 0;
    }
  }

  setCategory() {
    this.filterObj.category = this.newCardData.category;
    this.filterObj.services = this.getProvision(this.filterObj.category);
    this.newCardData.service = '';
    this.newCardData.version = '';
  }

  setTool() {
    this.selectedObj.version = '';
  }

  enableAdd() {
    return this.selectedObj.toolName && this.selectedObj.version;
  }

  addNewCardToList(key:string) {
    console.log('the key is : ', this.newCardData)
    this._cicdService.addTool(key,this.selectedObj)
    this.selectedObj = {
      toolName : '',
      version : ''
    }
    this.addNew = false;
  }

  removeCardFromList(event, item) {
    this.agilePlanService.removeCardFromList(this.key, item)
  }

  removeInfraService(cloudItem){
    // this.cloudService.removeInfraService(cloudItem)
    this.deleteSelectedCloudInfraResource.emit(cloudItem);
  }

  editCardInfo(cardInfo: any) {
    this.selectedObj = {
        "toolName" : cardInfo.toolName,
        "version" : cardInfo.version
    };
    this.editCard = true;
  }

  updateCardInfo() {
    this.selectedObj = {
      "toolName" : "",
      "version" : ""
  };
    this.editCard = false;
  }


  filterProvison(category) {
    // if (this.provisonSearch == '') {
    //   this.filterObj.services = this.getProvision(this.filterObj.category);
    // } else {
    //   this.filterObj.services = this.filterObj.services.filter(item => item.name.toLowerCase().includes(this.provisonSearch));
    // }

  }

  // sets cloud platform selection of first dropdown of cloud infra
setCloudPlatform(id:any){
  this.selectedCloudInfra.platformId = id;
}

// fetches all the platform data on first dropdown cloud infra
getPlatformResources(platformName : any){
  if(!platformName){
    return [];
  }
 let data =  this.cloudService.cloudInfra[0].platform.filter(item=>item.platformId == platformName)[0];
//  console.log(data)
 return data['resources'] ? data['resources'] : [];
}

selectPlatformResources(event : any){
  this.cloudInfraSelect.emit(this.selectedCloudInfra);
  this.selectedCloudInfra =  {
    infraName : '',
    platformId : '',
    resourceId : ''
  }
}

ngOnchanges(change: SimpleChange){
  // this.changeDetectorRef.detectChanges();
  
}

selectResource(resource){
  this.emitSelectedCloudInfra.emit(resource)

}

}
