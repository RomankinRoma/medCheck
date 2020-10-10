import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'discount'})

export class Discount implements PipeTransform {
  transform(money:number,hero:boolean,doctor:boolean): any {
    if (hero === true){
      money = money - (money / 100) * 40;
    }
    if (doctor === true){
      money = money - (money / 100) * 10;
    }
    return money;
  }

}
