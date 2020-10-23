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
  warHero:boolean;
  doctor:boolean;
  med: boolean;
  food: boolean;
  other: boolean;
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
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    console.log('AppComponent:OnInit');
  }

  setDate(day: number, month: string, time: number){
    return this.date = 'Mon '+this.month+' '+this.day+' 2020 07:07:07';
  }
  addOrder(date:string){
    this.userService.addOrder("",date,12,"23");
  }
}
