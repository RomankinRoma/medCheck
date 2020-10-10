import {
  Component,
  OnInit,
} from '@angular/core';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  city: string;
  street: string;
  age: number;
  gender: string;
  div1 = true;
  div2 = false;
  div3 = false;
  date = new Date();
  constructor() { }

  ngOnInit(): void {
    console.log('AppComponent:OnInit');
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
