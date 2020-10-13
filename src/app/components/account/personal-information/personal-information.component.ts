import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  @Input()
  city: string;
  @Input()
  street: string;
  @Input()
  age: number;
  @Input()
  gender: string;
  constructor() { }

  ngOnInit(): void {
  }

  getInfo(c: string, s: string, g: string, a: number){
    this.city = c;
    this.gender = g;
    this.age = a;
    this.street = s;
  }
}
