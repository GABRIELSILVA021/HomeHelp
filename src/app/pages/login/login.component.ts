import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any = {};
  constructor(private authService: AuthService, private http: HttpClient, private toast: ToastrService) {

  }

  login() {
    this.http.get('http://localhost:8080/usuarios/').subscribe({
      next: (data: any) => {
        if (data.length > 0) {
          const usuarios = data;
          if (usuarios.find((x: any) => x.email == this.loginForm.email && x.senha == this.loginForm.senha)) {
            this.authService.SignIn(this.loginForm.email, this.loginForm.senha);
          } else {
            this.toast.error('Usuário ou senha incorretos!');
          }
        }
      }
    })
  }

  logout() {
    return this.authService.SignOut();
  }
}
