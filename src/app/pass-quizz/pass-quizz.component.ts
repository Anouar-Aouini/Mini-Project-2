import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from '../quizz.service';
import { User } from '../register/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pass-quizz',
  templateUrl: './pass-quizz.component.html',
  styleUrls: ['./pass-quizz.component.css']
})
export class PassQuizzComponent implements OnInit {

  constructor(public userService:UserService,public router:Router,public route:ActivatedRoute,public quizService:QuizzService) { }
  public users?: User[];
  public quizzes:any=[];
  ngOnInit(): void {

    this.quizzes = this.quizService.getQuizzes();
  }
  passQuiz(quiz:any) {
     this.router.navigate([quiz.name,{id:quiz.id,name:quiz.name}],{relativeTo:this.route})
  }

}
