import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  userID:string = '';
  constructor() { }
  setUserID(id:string){
    this.userID = id;
  }
  isAllowUser(): boolean {
    return this.userID !== '';
  }
}
