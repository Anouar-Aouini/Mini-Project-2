import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../register/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(public route : ActivatedRoute, public userService : UserService, public router : Router) { }
  public param: { id: number, name: string } = { id: 0, name: "" }
  public user? :User;
  public quiz?: any;

  ngOnInit(): void {
    this.user = this.userService.getLoggedUser();
      this.param = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
      }
    this.quiz = this.user?.quizzes.filter((el: any) => +el.id === +this.param.id)[0].quizzes;
  }
  back() {
    this.router.navigate(["/auth/addquizz"])
  }
  deleteQuestion(question: any) {
    let id = question.id;
    let user = {
      email:this.user?.email,
      id:this.user?.id,
      password:this.user?.password,
      role:this.user?.role,
      username:this.user?.username,
      quizzes:this.user?.quizzes.map((el: any) => +el.id === +this.param.id ?
    {id:el.id,name:el.name,quizzes:this.user?.quizzes.filter((el: any) => +el.id === +this.param.id)[0].quizzes.filter((el: any) => +el.id !== id)}
      :
        el)
    };
    this.userService.setUser(JSON.stringify(user));
    this.user = this.userService.getLoggedUser();
    this.quiz = this.user?.quizzes.filter((el: any) => +el.id === +this.param.id)[0].quizzes;

    }
}
