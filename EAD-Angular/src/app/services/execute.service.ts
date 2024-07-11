import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExecuteService {

  constructor(private http: HttpService) { }

   url = environment.API_URL 

  getChangeRequests(UserId: string, AccountId: string): Observable<any> {
    const endpoint = 'api/v1/execute/getentities';
    const queryParams = { UserId, AccountId };

    return this.http.get(endpoint, queryParams);
  }
}
