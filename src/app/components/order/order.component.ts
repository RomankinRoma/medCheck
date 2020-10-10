import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

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
  ngOnChanges() {    		console.log('AppComponent:OnChanges');  }
  ngDoCheck() {         	console.log('AppComponent:DoCheck');  }
  ngAfterContentInit() {    console.log('AppComponent:AfterContentInit');  }
  ngAfterContentChecked() { console.log('AppComponent:AfterContentChecked'); }
  ngAfterViewInit() {       console.log('AppComponent:AfterViewInit');  }
  ngAfterViewChecked() {    console.log('AppComponent:AfterViewChecked');  }
  ngOnDestroy() {    		console.log('AppComponent:OnDestroy');  }

  setDate(day: number, month: number, time: number){
    this.date = day + '.' + month + '.' + time;
}

}
