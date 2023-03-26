import { Component } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService){}

  login(){
    return this.authService.SignIn("teste@teste.com",'1234');
  }

  logout(){
    return this.authService.SignOut();
  }
}
