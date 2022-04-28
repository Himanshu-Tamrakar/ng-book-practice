import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  user: {[email: string]: string};
  constructor() { 
    this.user = {};
  }

  setUser(user: {[email: string]: string}):void {
    this.user = user;
  }

  getUser(): {[email:string]: string} {
    return this.user;
  }
}
