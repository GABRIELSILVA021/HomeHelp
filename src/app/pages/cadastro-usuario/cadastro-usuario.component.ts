import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  cadastro: any = {}

  constructor(private http: HttpClient, private tostr: ToastrService, private router: Router) { }
  signup() {

    this.http.post('http://localhost:8080/usuarios', this.cadastro).subscribe({
      next: (data: any) => {
        this.tostr.success('Usuário cadastrado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.tostr.error('Ocorreu um erro ao cadastrar usuário!');
      }
    })
    console.log(this.cadastro);
  }
}
