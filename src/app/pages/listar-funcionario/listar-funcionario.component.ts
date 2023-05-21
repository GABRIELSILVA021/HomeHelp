import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {
  funcionarios: any = [];

  constructor(private http: HttpClient, private tostr: ToastrService) {

  }
  ngOnInit(): void {
    this.http.get('http://localhost:8080/funcionarios/').subscribe({
      next: (data: any) => {
        this.funcionarios = data;
      },
      error: (err) => {
        this.tostr.error('Ocorreu um erro ao listar funcionarios!');
      }
    })
  }



}
