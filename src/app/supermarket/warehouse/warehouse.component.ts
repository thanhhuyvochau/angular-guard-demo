import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent {
  items: Item[] = [];
  constructor(private itemService:ItemService){
    this.items = this.itemService.getWarehouse();
  }
}
