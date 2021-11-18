import { Component, OnInit } from '@angular/core';
import { User } from '../register/User.model';
import { UserService } from './../user.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {

  constructor(public userService:UserService) { }
  public coaches?:User[];
  ngOnInit(): void {
    this.coaches = this.userService.getCoaches();
    console.log(this.coaches)
  }


}
