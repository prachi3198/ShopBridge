import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ItemData } from '../models/itemdata';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  id: any;
  itemdata: ItemData[];
  editElement: any;
  success:boolean=false;
  get f() {
    return this.registerForm.controls;
  }
  constructor(private formBuilder: FormBuilder, private service: DataService, private actRoute: ActivatedRoute,private route:Router) { }

  bindData() {
   
    this.registerForm.patchValue({
      id: this.editElement.id,
      name: this.editElement.name,
      desc: this.editElement.description,
      price: this.editElement.price
    });
  }
  edit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.service.deleteItem(this.registerForm.get('id').value);

    let Product: ItemData = {
      id: this.registerForm.get('id').value,
      name: this.registerForm.get('name').value,
      price: this.registerForm.get('price').value,
      description: this.registerForm.get('desc').value
    }
    this.service.addItem(Product);
    this.success=true;
  }
  refresh(){
this.route.navigateByUrl("/shopbridge/itemlist")
  }
  ngOnInit() {
    this.itemdata = this.service.getItemList();
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.itemdata.forEach(element => {
      if (element.id == this.id) {
        this.editElement = element;
      }
    });
   
    setTimeout(() => {
      this.bindData();
    }, 1000);

    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', Validators.required]
    });

  }


}
