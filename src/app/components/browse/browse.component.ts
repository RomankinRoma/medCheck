import {
  Component,
  OnInit
} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private router: Router) { }

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


  gotoOrder(){
    this.router.navigateByUrl('order');
  }
}
