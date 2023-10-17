import { Component } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-market-with-resolve-guard',
  templateUrl: './market-with-resolve-guard.component.html',
  styleUrls: ['./market-with-resolve-guard.component.scss']
})
export class MarketWithResolveGuardComponent {
  items: Item[] = [];
  constructor(private route: ActivatedRoute){
    this.items = this.route.snapshot.data['items'];
  }
  canExit() : boolean {
    if (confirm("Do you want to exit withou buying more ?")) {
        return true
      } else {
        return false
      }
    }
}
