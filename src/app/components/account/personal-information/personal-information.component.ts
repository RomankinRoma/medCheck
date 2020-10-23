import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  user = new User('Rakhmatulla', 19, 'Almaty', 'Jubanova', 'Male', null);
  constructor() { }

  ngOnInit(): void {
  }

}
