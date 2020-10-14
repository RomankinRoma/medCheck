import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../models/Order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor() { }
  @Input()
  order: Array<Order>;
  ngOnInit(): void {
  }

}
