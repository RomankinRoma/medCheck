import {Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import {AccountComponent} from '../account/account.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   city = 'Almaty';
   street = 'Manasa';
   age = 23 ;
   gender = 'Male';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setValues(c: string, s: string, a: number, g: string){
    this.gender = g;
    this.age = a;
    this.street = s;
    this.city = c;
    this.router.navigateByUrl('account');
  }

}
