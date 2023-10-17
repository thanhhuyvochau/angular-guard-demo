import { Component } from '@angular/core';
import { UserManagementService } from '../services/user-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userId:string = '';
  constructor(private userManageService:UserManagementService){}
  giveID(){
    console.log(this.userId); 
    this.userManageService.setUserID(this.userId);
  }
}
