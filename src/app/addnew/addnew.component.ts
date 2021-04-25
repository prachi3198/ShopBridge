import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ItemData } from '../models/itemdata';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  exist:boolean=false;
  itemdata: ItemData[];
  get f() {
    return this.registerForm.controls;
  }
  constructor(private formBuilder: FormBuilder, private service: DataService) { }
  submit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
   let index= this.itemdata.findIndex(i=>i.id===this.registerForm.get('id').value);
  if(index!=-1){
    this.exist=true;
    setTimeout(() => {
      this.exist=false;
    }, 3000);
    return;
  }
    let Product: ItemData = {
      id: this.registerForm.get('id').value,
      name: this.registerForm.get('name').value,
      price: this.registerForm.get('price').value,
      description: this.registerForm.get('desc').value
    }
    this.success = true;
    this.service.addItem(Product);
  }
  refresh() {
    this.registerForm.reset();
    this.submitted = false;
  }
  ngOnInit() {
    this.itemdata=this.service.getItemList();
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

}
