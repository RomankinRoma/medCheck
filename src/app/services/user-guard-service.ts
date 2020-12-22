import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Resolve,
  Route,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from './user-service.service';
import {LoggingService} from './logging-service.service';
import {Observable} from 'rxjs';


@Injectable()
export class UserGuardService implements CanActivate, CanLoad, CanDeactivate<any>,Resolve<any>, CanActivateChild {
  constructor(private router: Router,
              private userService: UserService,
              private logService: LoggingService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    this.logService.consoleLog('Component that can see only authorized user');

    if (!this.userService.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

  canLoad(route: Route): boolean {

    this.logService.consoleLog('Here we use can load');

    if (!this.userService.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  confirm(message?: string): boolean {
    const confirmation = window.confirm(message || 'Are you sure?');

    return confirmation;
  }

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    this.logService.consoleLog('Here we use can deactivate');
    const url = nextState.url;
    console.log('We are in ' + url);

    if (!component.isUpdating) {
      component.isUpdating = false;
      return this.confirm(`Do you want to cancel order?`);
    }
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    console.log("Resolve");
    return this.userService.getOrders();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    this.logService.consoleLog('Component that can see only authorized user(Child)');

    if (!this.userService.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
