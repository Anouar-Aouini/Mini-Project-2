import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../add-quizz/quiz.module';
import { QuizzService } from '../quizz.service';
import { User } from '../register/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pass-quizz',
  templateUrl: './pass-quizz.component.html',
  styleUrls: ['./pass-quizz.component.css']
})
export class PassQuizzComponent implements OnInit {
  public searchedQuiz: string = "";
  constructor(public userService:UserService,public router:Router,public route:ActivatedRoute,public quizService:QuizzService) { }
  public users?: User[];
  public quizzes: any = [];
  public user!: User;
  public pageSlice?: Quiz[];
  public start: number = 0;
  public end: number = 4;
  ngOnInit(): void {
    this.user = this.userService.getLoggedUser();
    this.quizzes = this.quizService.getQuizzes();
    this.pageSlice = this.quizzes.slice(this.start, this.end);
  }
  passQuiz(quiz:any) {
     this.router.navigate([quiz.name,{id:quiz.id,name:quiz.name}],{relativeTo:this.route})
  }
    onChangePage(event:PageEvent) {
    const startIndex = event.pageSize * event.pageIndex;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.quizzes.length) {
      endIndex = this.quizzes.length;
    }
    this.start = startIndex;
    this.end = endIndex;
    this.pageSlice = this.quizzes.slice(startIndex, endIndex);
  }

}
