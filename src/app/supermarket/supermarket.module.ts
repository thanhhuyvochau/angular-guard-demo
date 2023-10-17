import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupermarketRoutingModule } from './supermarket-routing.module';
import { SupermarketComponent } from './supermarket.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { WarehouseComponent } from './warehouse/warehouse.component';


@NgModule({
  declarations: [
    SupermarketComponent,
    StaffListComponent,
    WarehouseComponent
  ],
  imports: [
    CommonModule,
    SupermarketRoutingModule
  ]
})
export class SupermarketModule { }
