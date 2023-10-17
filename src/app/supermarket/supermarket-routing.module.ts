import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupermarketComponent } from './supermarket.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { NotificationGuard } from '../guards/notification.guard';

const routes: Routes = [
  {
    path: '', component: SupermarketComponent,canActivateChild: [NotificationGuard], children: [{
      path: 'staffs',
      component: StaffListComponent
    },{
      path: 'warehouse',
      component: WarehouseComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupermarketRoutingModule { }
