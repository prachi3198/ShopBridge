import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ItemData } from '../models/itemdata';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  itemdata:ItemData[];
  itemdataC:any=[];
  constructor(private service: DataService,private router:Router) { }
edit(id){
 this.router.navigateByUrl(`/shopbridge/edit/${id}`);
}
delete(id){
  this.service.deleteItem(id);
  console.log("item",this.itemdataC);
  this.getData();
}
search(ev){
  this.itemdata=[];
  
  this.itemdataC.forEach(element => {
       if(element.name.toLowerCase().includes(ev.target.value.toLowerCase())){
      this.itemdata.push(element);
        }
  });
  
}
getData(){
  this.itemdata=this.service.getItemList();
  this.itemdataC=JSON.parse(JSON.stringify(this.itemdata));
 
}
  ngOnInit() {
   this.getData();
   
  }

}
