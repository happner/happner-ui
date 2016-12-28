import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users = [
  new User('russel','password85'),
  new User('user1@gmail.com','a23')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  login(user){
   // var authenticatedUser = users.find(u => u.email === user.email);
    if (true){
      localStorage.setItem("user", {
          email:"russel@rfm.org.za",
          password:"password85"
      });
      this._router.navigate(['Home']);      
      return true;
    }
    return false;

  }

   checkCredentials( ){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['Login']);
    }
  }

   getUser(){
     return localStorage.getItem("user");
   }
}
