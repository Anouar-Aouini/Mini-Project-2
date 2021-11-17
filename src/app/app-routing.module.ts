import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { AddQuizzComponent } from './add-quizz/add-quizz.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { CoachGuard } from './coach.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PassQuestionComponent } from './pass-question/pass-question.component';
import { PassQuizzComponent } from './pass-quizz/pass-quizz.component';
import { QuestionsComponent } from './questions/questions.component';
import { RegisterComponent } from './register/register.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  { path: "", redirectTo:"/register",pathMatch:"full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'auth', component: AuthComponent,
    canActivate: [AuthGuard], children: [
      { path: 'addquizz', component: AddQuizzComponent, canActivate: [CoachGuard] },
      { path: "addquizz/:id", component: AddQuestionsComponent },
      { path: "addquizz/add/:id",component: QuestionsComponent },
      { path: 'passquizz', component: PassQuizzComponent },
      { path: 'passquizz/:id/:id', component: ScoreComponent},
      { path: "passquizz/:id", component: PassQuestionComponent},
      { path: 'dashboard', component: DashboardComponent }
  ]},
  { path:"**",component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
