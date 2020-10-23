import { Injectable } from '@angular/core';
import {Order} from '../models/Order';
import {LoggingService} from './logging-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  orderList=[new Order("Someone",15,"№14","Fri Dec 12 2020 07:44:57"),new Order("Someone2",15,"№15","Fri Dec 08 2020 07:44:57")];
  constructor(private logService: LoggingService) { }

  getOrders(){
    this.logService.consoleLog("Orders:\n"+this.orderList.toString())

    return this.orderList;
  }

  addOrder(th:string,date:string,orderNumber:number,hospital:string){
    this.orderList.push(new Order(th,orderNumber,hospital,date));
    this.logService.consoleLog("Order "+orderNumber+" added!")

  }
}
