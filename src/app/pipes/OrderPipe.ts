import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'orderPipe'})

export class OrderPipe implements PipeTransform {
  transform(money:number,med:boolean,food:boolean,some:boolean): any {
    if (med === true){
          money=money+1000;
        }
    if (food === true){
      money=money+1000;
    }
    if (some === true){
      money=money+1000;
    }
    return money;
  }

}
