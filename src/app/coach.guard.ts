import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CoachGuard implements CanActivate {
  constructor(public router: Router,public userService: UserService){}
  canActivate(): boolean{
    if (this.userService.getLoggedUser().role==="Coach") {
      return true;
    } else {
      return false;
    }
  }
}
