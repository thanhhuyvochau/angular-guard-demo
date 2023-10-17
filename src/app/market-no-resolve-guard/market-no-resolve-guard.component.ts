import { Component } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-market-no-resolve-guard',
  templateUrl: './market-no-resolve-guard.component.html',
  styleUrls: ['./market-no-resolve-guard.component.scss']
})
export class MarketNoResolveGuardComponent {
  items: Item[] = [];
  constructor(private itemSerivce:ItemService){
    this.itemSerivce.getItems().subscribe(items => this.items = items);
  }
  canExit() : boolean {
    if (confirm("Do you want to exit withou buying more ?")) {
        return true
      } else {
        return false
      }
    }
}
