import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,public router:Router,public userService:UserService) { }
  public loginForm!: FormGroup;
  public errorMessage = {msg:"",show:false};
  ngOnInit(): void {
     this.loginForm = this.fb.group({
      email: ["", [Validators.required,Validators.email]],
      password: ["",[Validators.required, Validators.minLength(6)]],
      });
  }

  onSubmitLogin() {
  let local: string = <string>localStorage.getItem("users");
    if (local) {
      let users = [...JSON.parse(local)];
    if (!users || !users.filter(el => el.email === this.loginForm.value.email).length) {
        this.errorMessage.show = true;
        this.errorMessage.msg = "you are not registered yet"
      setTimeout(() => {
          this.errorMessage.show = false;
      }, 2000);
    } else {
      for (let i of users) {
        if (i.email === this.loginForm.value.email && i.password === this.loginForm.value.password) {
          this.userService.setUser(JSON.stringify(i))
          this.router.navigate(["/auth/dashboard"])
        } else {

          this.errorMessage.msg = "check your password"
          this.errorMessage.show = true;
          setTimeout(() => {
          this.errorMessage.show = false;
          }, 2000);
        }
      }
      }
    } else {
      this.errorMessage.msg = "you are not registered yet"
      this.errorMessage.show = true;
        setTimeout(() => {
        this.errorMessage.show = false;
        }, 2000);
    }
        this.loginForm.reset();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
