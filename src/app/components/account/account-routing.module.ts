import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {AccountComponent} from './account.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';

const routes: Routes = [
  {
  path: '', component: AccountComponent,
  children: [
  {path: 'personal', component: PersonalInformationComponent},
    {path: 'orders', component: MyOrdersComponent},
]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {

}
