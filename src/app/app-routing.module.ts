import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowseComponent} from './components/browse/browse.component';
import {AboutComponent} from './components/about/about.component';
import {OrderComponent} from './components/order/order.component';
import {AccountComponent} from './components/account/account.component';
import {DiscountComponent} from './components/discount/discount.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: '' , component: BrowseComponent},
  {path: 'home' , component: BrowseComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'order' , component: OrderComponent},
  {path: 'account' , component: AccountComponent},
  {path: 'service', component: DiscountComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
