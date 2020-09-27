import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild(LoginComponent) child: LoginComponent = new LoginComponent();
  city: string;
  street: string;
  age: number;
  gender: string;
  div1 = true;
  div2 = false;
  div3 = false;

  constructor() { }

  ngOnInit(): void {
    this.city = this.child.city;
    this.street = this.child.street;
    this.age = this.child.age;
    this.gender = this.child.gender;

  }

  div1Function(){
    this.div1 = true;
    this.div2 = false;
    this.div3 = false;
  }

  div2Function(){
    this.div2 = true;
    this.div1 = false;
    this.div3 = false;
  }

  div3Function(){
    this.div3 = true;
    this.div2 = false;
    this.div1 = false;
  }

}
