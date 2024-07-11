import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpService } from './http.service';
import { LocalStorageService, StorageKeys } from './local-storage.service';
import { User } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile: any = {}

  URL = environment.API_URL;

  isLogged: boolean = false;

  loginError: any = {}

  constructor(private router: Router, private http: HttpService, private storage : LocalStorageService) { }


  login(userInfo: any) {

    // if(userInfo.username === 'admin' && userInfo.password === 'admin'){
    //   // localStorage.setItem('token','aaa');
    //   this.router.navigate(['']);
    //   this.isLogged = true;
    // }


    let URL = 'api/v1/Auth/login';
    return this.http.post(URL, {
      userName: userInfo.username,
      password: userInfo.password
    }).subscribe({
      next: res => {
        console.log('THE RESPONSE LOGIN  : ', res);
        this.loginError = {}
        if (res['token']) {
          this.storage.set<User>(StorageKeys.User, res['user'])
          this.storage.set<String>(StorageKeys.Token, res['token'])
          localStorage.setItem('userProfile', JSON.stringify(res['user']))
          localStorage.setItem('token', res['token']);
          this.router.navigate(['']);
          this.isLogged = true;
        } else {
          this.isLogged = false;

        }
      }, error: error => {
        this.loginError = {
          message: error.error.message
        }
        console.log('the login error : ', error)
      }
    });

  }

  isLoggedIn() {
    // console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
    //  return this.isLogged;
  }

  logout() {
    // localStorage.removeItem('token');
    this.isLogged = false;
    this.userProfile = {};
    localStorage.removeItem('token');
    localStorage.removeItem('userProfile');
    this.router.navigate(['login']);

  }

  getUserProfile() {
    return this.userProfile;
  }
}
