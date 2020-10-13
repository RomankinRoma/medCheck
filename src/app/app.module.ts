import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DiscountComponent } from './components/discount/discount.component';
import { BrowseComponent } from './components/browse/browse.component';
import { OrderComponent } from './components/order/order.component';
import { AccountComponent } from './components/account/account.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import {OrderPipe} from './pipes/OrderPipe';
import {Discount} from './pipes/Discount';
import {AccountModule} from './components/account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DiscountComponent,
    BrowseComponent,
    OrderComponent,
    AboutComponent,
    LoginComponent,
    OrderPipe,
    Discount,
  ],
    imports: [
        AccountModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
