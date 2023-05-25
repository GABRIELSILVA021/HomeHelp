import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent {
  funcionario: any = {};

  constructor(private http: HttpClient, private tostr: ToastrService) { }

  cadastrar() {
    this.funcionario.cpf = +this.funcionario.cpf;
    this.funcionario.valor = parseFloat(this.funcionario.valor);
    this.http.post('http://localhost:8080/funcionarios', this.funcionario).subscribe({
      next: (data: any) => {
        this.tostr.success('Funcionário cadastrado com sucesso!');
      },
      error: (err) => {
        this.tostr.error('Ocorreu um erro ao cadastrar o funcionário!');
      }
    })
    console.log(this.funcionario);
  }
}
