import {
  Component,
  OnInit, Output, ViewChild
} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {Order} from '../../models/Order';
import {UserService} from '../../services/user-service.service';

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
  personal:boolean;
  orders:boolean;
  order:Order[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.personal=true;
    this.orders=false;
    this.order=this.userService.getOrders();
  }

  showOrders(){
    this.orders=true;
    this.personal=false;
  }
  showPersonal(){
    this.personal=true;
    this.orders=false;
  }
}
