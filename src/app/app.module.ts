import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuizzComponent } from './add-quizz/add-quizz.component';
import { PassQuizzComponent } from './pass-quizz/pass-quizz.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { QuestionsComponent } from './questions/questions.component';
import { PassQuestionComponent } from './pass-question/pass-question.component';
import { ScoreComponent } from './score/score.component';
import { SearchPipe } from './search.pipe';
import { CoachesComponent } from './coaches/coaches.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    DashboardComponent,
    AddQuizzComponent,
    PassQuizzComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AddQuestionsComponent,
    QuestionsComponent,
    PassQuestionComponent,
    ScoreComponent,
    SearchPipe,
    CoachesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
