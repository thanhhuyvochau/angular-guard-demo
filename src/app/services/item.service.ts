import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  supermarketItems: Item[] = [
    { name: 'Milk', price: 2.49 },
    { name: 'Bread', price: 1.99 },
    { name: 'Eggs', price: 1.79 },
    { name: 'Cereal', price: 3.29 },
    { name: 'Bananas', price: 0.99 }
  ];
  itemObservable: Subject<Item[]> = new Subject<Item[]>();

  constructor() { }
  getItems(){
    setTimeout(() => {
      this.itemObservable.next(this.supermarketItems);
    }, 1000);
    return this.itemObservable;
  }
  getWarehouse(): Item[] {
    return this.supermarketItems;
  }
}
