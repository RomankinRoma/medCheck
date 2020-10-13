import {Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  city = 'Almaty';
  street = 'Manasa';
  age = 23 ;
  gender = 'Male';
  ngOnInit(): void {
  }



}
