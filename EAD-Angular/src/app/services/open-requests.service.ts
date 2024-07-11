import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})

export class OpenRequestsService {

  constructor(private http: HttpService) { }

  Url = environment.API_URL
  getOpenRequests(userId: string): Observable<any[]>{
    /* const userId = '1';
    const completeUrl = `${this.Url}?userId=${userId}`;
    return this.http.get<any>(completeUrl) */
    const endpoint = '/api/v1/provision/getchangerequests';
    const queryParams = {userId};
    return this.http.get(endpoint,queryParams);
  }

  getRecentProjects(userId: string): Observable<any[]> {

    /* const userId = '1';
    const recentProjectsUrl = `${this.Url2}?userId=${userId}`;
    return this.http.get<any>(recentProjectsUrl) */

    const endpoint = '/api/v1/project/getRecentProjects';
    const queryParams = {userId};
    return this.http.get(endpoint,queryParams);
  }




}
