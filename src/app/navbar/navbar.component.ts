import { Component, OnInit } from '@angular/core';
import { User } from '../register/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService:UserService) { }
  public user: User=this.userService.getLoggedUser();

  ngOnInit(): void {
    console.log(this.user)
  }

}
