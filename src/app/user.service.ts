import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

    getLocal(item:string) {
      return  <string>localStorage.getItem(item)
    }

    setUsers(users:string) {
    localStorage.setItem("users", users)
    }

    setUser(user:string) {
    localStorage.setItem("user", user)
    }

    getUsers() {
    let local: string = <string>localStorage.getItem("users");
    return  JSON.parse(local);
    }

    getLoggedUser() {
    let local:string = <string>localStorage.getItem('user')
    let user = JSON.parse(local)
    return user;
    }

    getUser() {
    let local:string = <string>localStorage.getItem('user')
    let user = JSON.parse(local)
    return !!user;
    }

}
