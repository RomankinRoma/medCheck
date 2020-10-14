import {
  Component,
  OnInit, Output, ViewChild
} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {Order} from '../../models/Order';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{

  city='Almaty'
  gender='Male';
  age=23;
  street='Manas';
  date=Date;
  order=[new Order("Аркадий Паровозоv",21, "№12", new this.date),new Order("Аркадий Паровозоv v2",22, "№14", new this.date)]
  constructor() { }

  ngOnInit(): void {

  }

  personal=true;
  orders=false;

  showOrders(){
    this.orders=true;
    this.personal=false;
  }
  showPersonal(){
    this.orders=false;
    this.personal=true;
  }
}
