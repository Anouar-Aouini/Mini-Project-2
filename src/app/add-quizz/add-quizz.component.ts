import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Quiz } from './quiz.module';

@Component({
  selector: 'app-add-quizz',
  templateUrl: './add-quizz.component.html',
  styleUrls: ['./add-quizz.component.css']
})

export class AddQuizzComponent implements OnInit {
  constructor(public router: Router,public userService:UserService) { }
  public user!: any;
  public searchedQuiz: string = "";
  public pageSlice?: Quiz[];
  public start: number = 0;
  public end: number = 4;
  ngOnInit(): void {
    this.user = this.userService.getLoggedUser()
    this.pageSlice = this.user.quizzes.slice(this.start, this.end);
  }
  onSubmit(quizForm: NgForm) {
    this.router.navigate(["/auth/addquizz",quizForm.value.quiz, {name:quizForm.value.quiz,id: Math.random()}]);
  }
  addQuizz(quiz:any) {
    this.router.navigate(["/auth/addquizz",quiz.name, {name:quiz.name,id: quiz.id}]);
  }
  checkQuiz(quiz: any) {
    this.router.navigate(["/auth/addquizz/add", quiz.name, { id: quiz.id , name:quiz.name}]);
  }
  deleteQuiz(quiz: any) {
    let id = quiz.id;
    let user = {
      email:this.user?.email,
      id:this.user?.id,
      password:this.user?.password,
      role:this.user?.role,
      username:this.user?.username,
      quizzes:this.user?.quizzes.filter((el:any)=> +el.id !== +id)
    };
    this.userService.setUser(JSON.stringify(user));
    this.userService.setUsers(JSON.stringify(this.userService.getUsers().map((el: any) => +el.id === +this.user?.id ? user : el)))
    this.user = this.userService.getLoggedUser();
    this.pageSlice = this.user.quizzes.slice(this.start, this.end);
  }

    onChangePage(event:PageEvent) {
    const startIndex = event.pageSize * event.pageIndex;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.user.quizzes.length) {
      endIndex = this.user.quizzes.length;
    }
    this.start = startIndex;
    this.end = endIndex;
    this.pageSlice = this.user.quizzes.slice(startIndex, endIndex);
  }

}
