import { Injectable } from '@angular/core';
import { User } from '../models/model';

export enum StorageKeys {
  User = 'USER',
  Token = 'TOKEN',
  ProjectDetails = 'projectDetails'
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get<T>(key: StorageKeys): T {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  set<T>(key: StorageKeys, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get userid(){
    let user:User = this.get(StorageKeys.User);
    return user ? user.id : null;
  }
  
  get accountId(){
    let user:User = this.get(StorageKeys.User);
    return user ? user.accountId : null;
  }

  get roles(){
    let user:User = this.get(StorageKeys.User);
    return user ? user.roles : null;
  }
}
