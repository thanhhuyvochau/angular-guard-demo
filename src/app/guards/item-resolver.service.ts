import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<Item[]> {
  constructor(private itemService: ItemService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Item[]> {
    return this.itemService.getItems();
  }
}
