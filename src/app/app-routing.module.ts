import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddnewComponent } from './addnew/addnew.component';
import { HomeComponent } from './home/home.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ModifyComponent } from './modify/modify.component';
import { ShopstructureComponent } from './shopstructure/shopstructure.component';


const routes: Routes = [
  { path: '', redirectTo: 'shopbridge', pathMatch: 'full' },
  {
    path: 'shopbridge', component: ShopstructureComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'addnew', component: AddnewComponent },
      { path: 'itemlist', component: ItemlistComponent },
      { path: 'edit/:id', component: ModifyComponent },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
