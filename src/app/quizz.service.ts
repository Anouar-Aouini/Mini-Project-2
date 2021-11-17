import { Injectable } from '@angular/core';
import { Question } from './add-quizz/question.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(public userService:UserService) { }
  setQuiz(question:string) {
    console.log(question);
    localStorage.setItem("quizzes", question);
  }

  getQuizzes() {
    let quizzes: any[] = [];
    let users = this.userService.getUsers().filter((el: any) => el.role === "Coach").
      map((el: any) => el.quizzes.map((el: any) => quizzes.push(el)))
    return quizzes
  }

    getLocal(item:string) {
      return  <string>localStorage.getItem(item)
    }
  getQuiz(quizzes:Question[],id:number) {
    return quizzes.filter((el:any)=>el.id===id)
  }

}
