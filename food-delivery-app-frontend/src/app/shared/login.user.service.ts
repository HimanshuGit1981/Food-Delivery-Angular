import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginUserService {
  loggedInUser: any;

  public setLoggedInUser(loggedInUser: any) {
    this.loggedInUser = loggedInUser;
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }

  constructor() {}
}
