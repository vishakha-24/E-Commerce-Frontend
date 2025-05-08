import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SellComponent } from './sell/sell.component';
import { AccountComponent } from './account/account.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { OrderFormComponent } from './order-form/order-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { HappyComponent } from './happy/happy.component';
import { CardComponent } from './card/card.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { MobileComponent } from './mobile/mobile.component';
import { HomeappliencesComponent } from './homeappliences/homeappliences.component';
import { GroceryComponent } from './grocery/grocery.component';
import { FurnitureComponent } from './furniture/furniture.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sell', component: SellComponent },
  { path: 'account', component: AccountComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'orders', component: OrderFormComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'my-orders', component: MyOrdersComponent},
  { path: 'card', component: CardComponent},
  { path: 'electronics', component: ElectronicsComponent},
  { path: 'fashion', component: FashionComponent},
  { path: 'mobile', component: MobileComponent},
  { path: 'homeappliences', component: HomeappliencesComponent},
  { path: 'grocery', component: GroceryComponent},
  { path: 'furniture', component: FurnitureComponent},

  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
