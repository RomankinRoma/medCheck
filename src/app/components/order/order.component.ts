import {
  Component,
  OnInit
} from '@angular/core';
import {UserService} from '../../services/user-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  checked: boolean;
  warHero = false;
  doctor = false;
  med = false;
  food = false;
  other = false;
  name: string;
  surname: string;
  city: string;
  street: string;
  house: string;
  gender: string;
  date: string;
  day: number;
  month: string;
  time: number;
  money = 5000;
  comments: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    console.log('AppComponent:OnInit');
  }

  // tslint:disable-next-line:typedef
  setDate(day: number, month: string, time: number) {
    return this.date = 'Mon ' + this.month + ' ' + this.day + ' 2020 07:07:07';
  }

  // tslint:disable-next-line:typedef
  addOrder(date: string,
           medicine: boolean,
           food: boolean,
           warHero: boolean,
           medWorker: boolean,
           comment: string) {
    this.userService.addOrder('', date, 12, '23', medicine, food, warHero, medWorker, comment);
  }
}
