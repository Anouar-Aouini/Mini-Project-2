import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../password.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder,public router:Router,public userService : UserService) { }
  public registerForm!: FormGroup;
  public role: string = "Candidate";
  public errorMessage = {msg:"",show:false};
  ngOnInit(): void {
      this.registerForm = this.fb.group({
      email: ["", [Validators.required,Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["",[ Validators.required, Validators.minLength(6)]],
      username: ["", Validators.required],
      role:["", Validators.required]
      }, { validator: PasswordValidator });
  }

  get username() {
    return this.registerForm.get('username');
   }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  onSubmitRegister() {

    let local: string = <string>localStorage.getItem("users");
     let user={id: Math.random(),
         email: this.registerForm.value.email,
         username: this.registerForm.value.username ,
         password: this.registerForm.value.confirmPassword,
         role: this.role,
         quizzes:[]
     }
    if (local && [...JSON.parse(local)].filter(el => el.email === this.registerForm.value.email).length === 1) {
      this.errorMessage.msg = "This email is already used"
      this.errorMessage.show = true;
      setTimeout(() => {
      this.errorMessage.show = false;
      }, 2000);

    }
    else if (local) {
      let users = [user,...JSON.parse(local)];
      this.userService.setUsers(JSON.stringify(users))
      this.userService.setUser(JSON.stringify(user));
      this.router.navigate(["/auth/dashboard"])
    } else {
      this.userService.setUsers(JSON.stringify([user]))
      this.userService.setUser(JSON.stringify(user));
      this.router.navigate(["/auth/dashboard"])
    }
    this.registerForm.reset();
  }
}
