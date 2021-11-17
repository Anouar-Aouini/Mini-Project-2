export interface User{
  id: number,
  email: string,
  password: string,
  quizzes: [{
    id: number,
    name: string,
    quizzes:[]
  }],
  role: string,
  username:string
}
