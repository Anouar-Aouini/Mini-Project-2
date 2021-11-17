import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Question } from '../add-quizz/question.model';
import { QuizzService } from '../quizz.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  constructor(public quizService: QuizzService, public userService: UserService, public route: ActivatedRoute) { }
  ngOnInit(): void {
  }
  quizModel = new Question("", "", "", "", "")
  public param:{id:number,name:string}={id:0,name:""}
  onSubmit(quizForm: NgForm) {
    this.param = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    }

    let localUser: string = this.userService.getLocal("user")
    let user = JSON.parse(localUser);
    let quiz = {
      id: Math.random(),
      question: quizForm.value.question,
      correctAnswer: quizForm.value.correctAnswer,
      wrongAnswer1: quizForm.value.wrongAnswer1,
      wrongAnswer2: quizForm.value.wrongAnswer2,
      wrongAnswer3: quizForm.value.wrongAnswer3,
      makerId: user.id
    };
    if (user.quizzes.length === 0 || user.quizzes.filter((el: any)=> +el.id === +this.param.id).length===0) {
      user.quizzes.push({ id: this.param.id, name: this.param.name, quizzes: [quiz] })
    } else {
      user.quizzes.map((el: any) => +el.id === +this.param.id ?
       el.quizzes.push(quiz) :
        null
      );
    }

    let users = this.userService.getUsers().map((el: any) => +el.id === +user.id ? user : el)
      this.userService.setUsers(JSON.stringify(users))
      this.userService.setUser(JSON.stringify(user));
      quizForm.resetForm();
  }
}
