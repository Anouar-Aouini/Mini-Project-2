import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor() { }
  setQuiz(question:string) {
    console.log(question);
    localStorage.setItem("quizzes", question);
  }

    getLocal(item:string) {
      return  <string>localStorage.getItem(item)
    }

}
