import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  legInfo = 'legal information';
  datePriv = 'date privacy';
  other = 'other links';
  cont = 'contact';
  constructor() { }

  ngOnInit(): void {
  }

}
