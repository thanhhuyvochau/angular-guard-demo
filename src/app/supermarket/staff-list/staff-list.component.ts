import { Component } from '@angular/core';
import { StaffMember } from 'src/app/models/staff.model';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent {
  staffMembers: StaffMember[] = [
    { id: 1, name: 'John Doe', position: 'Manager' },
    { id: 2, name: 'Jane Smith', position: 'Sales Associate' },
    { id: 3, name: 'Alice Johnson', position: 'Cashier' },
    { id: 4, name: 'Bob Wilson', position: 'Assistant Manager' }
  ];
}
