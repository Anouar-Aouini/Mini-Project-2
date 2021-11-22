import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-pass-question',
  templateUrl: './pass-question.component.html',
  styleUrls: ['./pass-question.component.css']
})
export class PassQuestionComponent implements OnInit {
  constructor(public route:ActivatedRoute, public router:Router,public quizService:QuizzService) { }
  public param: { id: number, name: string } = { id: 0, name: "" }
  public quizzes?: any;
  public ques: string[] =['correctAnswer',"wrongAnswer1","wrongAnswer2","wrongAnswer3"];
  public answers:{id:number,answer:number}[]=[];
  ngOnInit(): void {
    this.param = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    }
    this.quizzes = this.quizService.getQuizzes().filter((el: any) => +el.id === +this.param.id)[0].quizzes;
  }
  chooseAnswer(id: number, answer: string) {
    if (this.answers.length===0 || !this.answers.filter((el:any)=> +el.id === +id).length) {
      answer === "true" ? this.answers.push({ id, answer: 1 }) : this.answers.push({ id, answer: 0 })
    }
    this.answers.map((el: any) => +el.id === id && answer === "true" ?
      el.answer = 1 : +el.id === id && answer === "false" ? el.answer = 0 : null)
  }

  checkResult() {
    let score = this.answers.filter((el: any) => el.answer === 1).length;
    this.router.navigate(["score", { score:score+"/"+this.answers.length }], { relativeTo: this.route });
  }
}
