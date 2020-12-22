import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {AccountComponent} from './account.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';
import {UserGuardService} from '../../services/user-guard-service';

const routes: Routes = [
  {
    path: '', component: AccountComponent, canLoad: [UserGuardService],
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
