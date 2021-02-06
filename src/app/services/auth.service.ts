import { TokenServiceService } from './token-service.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  userRole:string;
  private loggedIn = new BehaviorSubject<Boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value: boolean)
  {
    this.loggedIn.next(value)
  }

  roleAuth(data){
    this.userRole = data
  }


  constructor(private token: TokenServiceService) {}


}
