import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(public router: Router) {
    this.setUserData();
  }

  SignIn(email: string, password: string) {
    localStorage.setItem('userData', JSON.stringify({ userEmail: email }));
    this.setUserData();
    this.router.navigate(['']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('userData')!);
    return user !== null;
  }

  SignUp(name: string, email: string, password: string) {}

  SignOut() {
    localStorage.removeItem('userData');
    this.setUserData();
    this.router.navigate(['login']);
  }

  setUserData() {
    this.userData = localStorage.getItem('userData');
  }
}
