import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  selectedProject : any = {};


  constructor(private http : HttpClient) { }

  getProjectDetails(userName : string){
    let user = { }
    if(localStorage.getItem('userProfile')){
      user = JSON.parse(localStorage.getItem('userProfile'))
    }
    let queryParams =  {
      'userName' : user['userName']
    }

    const URL = environment.API_URL + 'api/v1/project/getProjectDetails';
    return this.http.get(URL,{params : queryParams});
  }
}
