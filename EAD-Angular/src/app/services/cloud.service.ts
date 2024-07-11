import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  fetchInfra : boolean = false;

  cloudInfra: any = [];

  cloudServiceList: any = [];

  selectedCloudInfra : any = {};

  cloudCategories :any = [];

  constructor(private _http: HttpClient) { }

  /**
   *  The belwo function will set the selected cloud infra name like aws, azure..etc
   * @param name 
   */

  setCloudInfraName(name: string) {
    this.cloudInfra.name = name;
  }


  /**
   * The below function will add new service to the cloudinfra service list
   * @param service 
   */

  addInfrService(service: any) {
    this.cloudServiceList.push(service);
    console.log('CLOUD INFRA SERVICE : ',this.cloudServiceList)

  }


  /**
   * The below function will delete / remove a resource from cloud infra services list
   * @param service 
   */
  removeInfraService(service: any) {
    console.log(service);
    this.cloudServiceList = this.cloudServiceList.filter(item => item.resourceId != service.resourceId);
    
  }

  /**
   * The below function wil fetch the cloud infra details
   */
  getInfraDetails() {
    let body = {
      "projectId": 0,
      "area": "Cloud Infra",
      "categoryName": this.cloudInfra.name
    }
    let URL = environment.API_URL + "api/v1/cloudplatform/resources";
    this.fetchInfra = true;
    this._http.post(URL, body).subscribe(data=>{
      this.cloudInfra = data;
      this.cloudInfra.name = data[0].categoryName;
      console.log(this.cloudInfra)
      this.fetchInfra = false;
    })
  }

  setCloudInfra(){
    let URL = environment.API_URL + 'api/v1/cloudplatform/submit';
    return this._http.post(URL,this.selectedCloudInfra);
  }

  getCloudCategories(){
    let URL = environment.API_URL + 'api/v1/cloudplatform/categories';
    this._http.get(URL).subscribe(data=>{
      this.cloudCategories = data;
    },error=>{
      console.log(error);
    })
  }

}
