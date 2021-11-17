import { Question } from "../add-quizz/question.model";

export interface User{
  id: number,
  email: string,
  password: string,
  quizzes: [{
    id: number,
    name: string,
    quizzes:Question[]
  }],
  role: string,
  username:string
}
