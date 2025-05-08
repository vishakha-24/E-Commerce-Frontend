import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { SellComponent } from './sell/sell.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HappyComponent } from './happy/happy.component';
import { CardComponent } from './card/card.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { GroceryComponent } from './grocery/grocery.component';
import { HomeappliencesComponent } from './homeappliences/homeappliences.component';
import { MobileComponent } from './mobile/mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryListComponent,
    SellComponent,
    AccountComponent,
    AboutusComponent,
    ContactUsComponent,
    MyOrdersComponent,
    OrderFormComponent,
    HappyComponent,
    CardComponent,
    ElectronicsComponent,
    FashionComponent,
    FurnitureComponent,
    GroceryComponent,
    HomeappliencesComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
