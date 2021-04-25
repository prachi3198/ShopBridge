import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddnewComponent } from './addnew/addnew.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ModifyComponent } from './modify/modify.component';
import { HomeComponent } from './home/home.component';
import { ShopstructureComponent } from './shopstructure/shopstructure.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddnewComponent,
    ItemlistComponent,
    ModifyComponent,
    HomeComponent,
    ShopstructureComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
