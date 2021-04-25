import { Injectable } from '@angular/core';
import { ItemData } from './models/itemdata';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemList: ItemData[] = [
    {
      id: 1,
      name: "Washing Machine",
      price: 20000,
      description: "Good quality and durable"

    },
    {
      id: 500,
      name: "Headphones",
      price: 1200,
      description: "Amazing Sound Quality"

    },
    {
      id: 400,
      name: "Phone",
      price: 12000,
      description: "Best Display"

    }
  ]
  constructor() { }
  getItemList() {
    return this.itemList;
  }
  addItem(item:ItemData){
    this.itemList.push(item)
  }
  deleteItem(id){
   let index= this.itemList.findIndex(i=>i.id===id);
   this.itemList.splice(index,1);

  }
}
