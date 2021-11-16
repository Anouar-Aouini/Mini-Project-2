import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-quizz',
  templateUrl: './add-quizz.component.html',
  styleUrls: ['./add-quizz.component.css']
})
export class AddQuizzComponent implements OnInit {
  constructor(public router: Router,public userService:UserService) { }
  public user!:any;
  ngOnInit(): void {
    this.user = this.userService.getLoggedUser()
    console.log(this.user)
  }
  onSubmit(quizForm: NgForm) {
    this.router.navigate(["/auth/addquizz",quizForm.value.quiz, {name:quizForm.value.quiz,id: Math.random()}]);
  }
  addQuizz(quiz:any) {
    this.router.navigate(["/auth/addquizz",quiz.name, {name:quiz.name,id: quiz.id}]);
  }
}
