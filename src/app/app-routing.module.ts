import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowseComponent} from './components/browse/browse.component';
import {AboutComponent} from './components/about/about.component';
import {OrderComponent} from './components/order/order.component';
import {AccountComponent} from './components/account/account.component';
import {DiscountComponent} from './components/discount/discount.component';
import {LoginComponent} from './components/login/login.component';
import {UserGuardService} from './services/user-guard-service';

const routes: Routes = [
  {path: '' , component: BrowseComponent},
  {path: 'home' , component: BrowseComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'order' , component: OrderComponent, canDeactivate: [UserGuardService]},
  {path: 'account' , component: AccountComponent},
  {path: 'service', component: DiscountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', loadChildren: () => import('./components/account/account.module').then(allModule => allModule.AccountModule), canLoad: [UserGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
