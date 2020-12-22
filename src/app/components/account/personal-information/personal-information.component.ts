import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user-service.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit, OnChanges {
  user;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.currentUser;
  }

  ngOnChanges(): void {
    this.user = this.userService.currentUser;
  }
}
