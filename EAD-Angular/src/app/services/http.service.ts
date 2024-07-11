import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private get baseUrl() { return  Settings?.appSettings?.apiUrl};

  constructor(private http: HttpClient) { 
  }

  get(endpoint: string, qp? :{}): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`, {params : qp});
  }
  post(endpoint: string, body: any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, body);
  }
  put(endpoint: string, body: any) {
    return this.http.put(`${this.baseUrl}/${endpoint}`, body);
  }
}
