import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class UsersService {
  currentUser: Subject<User | null> = new BehaviorSubject<User | null>(null);
  constructor() { }
}

export const userServiceInjectables: Array<any> = [
  UsersService
];