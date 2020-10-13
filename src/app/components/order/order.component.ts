import {
  Component,
  OnInit
} from '@angular/core';

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
  month: number;
  time: number;
  money = 5000;
  constructor() { }

  ngOnInit(): void {
    console.log('AppComponent:OnInit');
  }

  setDate(day: number, month: number, time: number){
    this.date = day + '.' + month + '.' + time;
}

}
