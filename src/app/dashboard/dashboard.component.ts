import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router,public userService:UserService) { }
  public user = this.userService.getLoggedUser();

  ngOnInit(): void {
  }
    logOut() {
    localStorage.removeItem("user");
    this.router.navigate(["/login"])
  }
}
