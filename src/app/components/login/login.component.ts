import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService,
              private router: Router) {
  }

  loginLog: number;
  logPassword: string;
  city: string;
  street: string;
  age: number;
  gender: string;
  fullname: string;
  password: string;

  ngOnInit(): void {
  }

  login(id: number, password: string): void {
    this.userService.login(id, password);
  }

  register(name: string, age: number, city: string, street: string, gender: string, password: string): any {
    this.userService.register(name, age, city, street, gender, password);
  }


}
