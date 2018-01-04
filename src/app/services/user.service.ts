import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

public isUserLoggedin;
public email;

  constructor() { 
    this.isUserLoggedin = false;
  }

  setUserLoggedin(){
    this.isUserLoggedin = true;
    this.email = 'admin@admin.com';
}

  getUserLoggedin(){
    return this.isUserLoggedin;
  }

}
