import {
  Component,
  OnInit, Output, ViewChild
} from '@angular/core';
import {LoginComponent} from '../login/login.component';

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
