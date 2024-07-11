import { Injectable } from '@angular/core';
import { LocalStorageService, StorageKeys } from './local-storage.service';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CicdService {

  cicdTools : Subject<any> = new Subject<any>();
  cicdData : Subject<any> = new Subject<any>();

  ciList : any = [];
  cdList : any = [];

  toolsCategory : any = {
      'CI' : {
        'tools' : []
      },
      'CD' : {
        'tools' :[]
      }
  }

  constructor(private _local : LocalStorageService,private httpService : HttpService) { }

  getCICDTools() {
    let userId = this._local.userid;
    let url = environment.API_URL;
    let params = {
      "AccountId" : "1",
      "UserId" : "1"
    }
    this.httpService.get('api/v1/cicd/tools', params).subscribe(data=>{
      console.log('THE CICD DATA IS : ',data);
      this.cicdTools.next(data);
    },
    error=>{
      console.log("CICD ERROR IS : ",error)
    }
    )
  }

  addTool(section:string,item:any){
    if(section == 'Continuos Integration'){
      this.toolsCategory['CI']['tools'].push({
        'toolName' : item.toolName,
        'version' : item.version
      })
    }else{
      this.toolsCategory['CD']['tools'].push({
        'toolName' : item.toolName,
        'version' : item.version
      })
    }

    this.cicdData.next(this.toolsCategory)
    console.log(this.toolsCategory)
  }

  submitCICDRequest(){
    let projectDetails : any = this._local.get(StorageKeys.ProjectDetails);
    let tools: any = [];
    
    if(this.toolsCategory['CI'] && this.toolsCategory['CI'].tools && this.toolsCategory['CI'].tools.length){
      this.toolsCategory['CI'].tools.forEach(element => {
        tools.push(
          {
                  "category": "CI",
                  ...element,
                  "projectId": projectDetails.projectId
              
          })
        });
    }

    if(this.toolsCategory['CD'] && this.toolsCategory['CD'].tools && this.toolsCategory['CD'].tools.length){
      this.toolsCategory['CD'].tools.forEach(element => {
        tools.push(
          {
                  "category": "CD",
                  ...element,
                  "projectId": projectDetails.projectId
              
          })
        });
    }
    return this.httpService.post('api/v1/cicd/submit',tools);
  }

  resetCICDCategory(){
    this.toolsCategory = {
      'CI' : {
        'tools' : []
      },
      'CD' : {
        'tools' :[]
      }
  }
  }
  
}
