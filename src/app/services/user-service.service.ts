import {Injectable} from '@angular/core';
import {Order} from '../models/Order';
import {LoggingService} from './logging-service.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  orderList: any;
  userUrl = 'http://localhost:3000/users';
  orderUrl = 'http://localhost:3000/orders';
  users: any;
  currentUser: User = null;
  isLoggedIn = false;

  constructor(private router: Router,
              private http: HttpClient,
              private logService: LoggingService) {
  }


  getOrders(): any {
    this.http.get(this.orderUrl).subscribe(res => {
      this.orderList = res;
    });
    this.logService.consoleLog('Orders:\n' + this.orderList.toString());
    return this.orderList;
  }

  login(id: number, password: string): any {
    let user;
    this.http.get(`${this.userUrl}/${id}`).subscribe(res => {
      user = res;
      if (user.password === password) {
        this.currentUser = user;
        this.isLoggedIn = true;
        this.router.navigate(['account']);
        return true;
      }
      this.isLoggedIn = false;
      return false;
    });
  }

  register(name: string, age: number, city: string, street: string, gender: string, password: string): any {
    let response;
    // tslint:disable-next-line:max-line-length
    this.http.post(this.userUrl, new User(Math.floor((Math.random() * 100000) + 1), name, age, city, street, gender, null, password)).subscribe(
      res => {
        response = res;
        console.log(res);
        alert(response.id + ' this is your login to sing in!');
      }
    );
    return response;
  }

  addOrder(th: string, date: string, orderNumber: number, hospital: string, medicine: boolean,
           food: boolean,
           warHero: boolean,
           medWorker: boolean,
           comment: string): any {
    // tslint:disable-next-line:max-line-length
    this.http.post(this.orderUrl, new Order(Math.floor((Math.random() * 100000) + 1), this.currentUser.id, th, orderNumber, hospital, date, medicine, food, warHero, medWorker, comment)).subscribe(res => {
      console.log(res);
    });
    this.logService.consoleLog('Order ' + orderNumber + ' added!');
    return this.http.get(`${this.orderUrl}/${this.currentUser.id}`);
  }
}
