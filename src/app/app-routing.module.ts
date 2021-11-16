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
import { PassQuizzComponent } from './pass-quizz/pass-quizz.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", redirectTo:"/register",pathMatch:"full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'auth', component: AuthComponent,
    canActivate: [AuthGuard], children: [
      { path: 'addquizz', component: AddQuizzComponent, canActivate: [CoachGuard] },
      { path:"addquizz/:id",component:AddQuestionsComponent },
      { path: 'passquizz', component: PassQuizzComponent },
      { path: 'dashboard', component: DashboardComponent }
  ]},
  { path:"**",component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
