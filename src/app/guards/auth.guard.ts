import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserManagementService } from '../services/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad  {
  constructor(private userManagementSerivce:UserManagementService){}
  canLoad(route: Route): boolean {
    if(this.userManagementSerivce.userID !== 'admin'){
      alert("You are not admin, cant go !!!"); 
      return false;
    }
    return true;
  }
}
