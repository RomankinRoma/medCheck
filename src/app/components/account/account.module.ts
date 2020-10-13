import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {AccountRoutingModule} from './account-routing.module';
import {AccountComponent} from './account.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';


@NgModule({
  declarations: [
    PersonalInformationComponent,
    AccountComponent,
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
