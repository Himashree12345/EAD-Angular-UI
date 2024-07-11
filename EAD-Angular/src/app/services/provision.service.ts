import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProvisionService {

  constructor(private http: HttpService) { 

  }
  getChangeRequests(userId: number, isDeveloper: boolean) {
    var qp = {userId : userId};
    let endpoint  = isDeveloper ? 'api/v1/provision/getchangerequests' : 'api/v1/provision/getAllChangeRequests';
    return this.http.get(endpoint, qp =  qp);
  }
  getChangeRequestDetails(userId: number, crNumber: String) {
    var qp = {userId : userId, crNumber: crNumber};
    return this.http.get('api/v1/provision/getChangeRequestDetails', qp =  qp);
  }
  approveRequest(crNumber:String)
  {
    return this.http.put(`api/v1/provision/${crNumber}/approve`,null);
  }
  rejectRequest(crNumber:String,remarks:String)
  {
    var body={"rejectReason": remarks};
    return this.http.put(`api/v1/provision/${crNumber}/reject`,body);
  }
}
