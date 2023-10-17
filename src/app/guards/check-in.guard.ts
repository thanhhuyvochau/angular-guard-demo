import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserManagementService } from '../services/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class CheckInGuard implements CanActivate {
  constructor(private userManagementSerivce:UserManagementService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.userManagementSerivce.isAllowUser()){
      alert("You cannot go if dont give me your ID"); 
      return false;
    }
    return true;
  }
  
}
