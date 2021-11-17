import { Question } from "./question.model";

export class Quiz {
  constructor(
    public id: number,
    public name: string,
    public quizzes:Question[]
         ){}
}
