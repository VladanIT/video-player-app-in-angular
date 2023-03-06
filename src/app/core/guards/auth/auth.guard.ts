import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../../../modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth : AuthService, public router : Router){}
  canActivate(){
    if(this.auth.IsLoggedIn()){
      return true;
    }
    this.router.navigate(['auth/login']);
    return false;
  }

}
