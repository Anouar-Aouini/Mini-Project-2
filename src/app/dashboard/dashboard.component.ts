import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../register/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild("username") username?: ElementRef;
  constructor(public router: Router,public userService:UserService) { }
  public user = this.userService.getLoggedUser();
  public show = false;
  ngOnInit(): void {
  }
    logOut() {
    localStorage.removeItem("user");
    this.router.navigate(["/login"])
    }

    showTemp() {
    this.show = true;
    }
  editUser(id: number) {

    this.userService.setUsers(JSON.stringify(this.userService.getUsers().map((el:User) => el.id === id ? {
      id: el.id, username: this.username?.nativeElement.value,password:el.password,email:el.email,role:el.role,quizzes:el.quizzes
    } : el)))
    this.userService.setUser(JSON.stringify(
      {...this.user,username:this.username?.nativeElement.value}
    ))
    this.user = this.userService.getLoggedUser();
    console.log({...this.user,username:this.username?.nativeElement.value})
    this.show = false;
  }

}
