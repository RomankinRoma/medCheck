import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  city = 'Almaty';
  street = 'Almaty';
  age = 4;
  gender = 'Male';
  constructor() { }

  ngOnInit(): void {
  }

}
