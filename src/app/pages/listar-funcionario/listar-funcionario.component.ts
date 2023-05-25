import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {
  funcionarios: any = [];
  showEmptyMessage = false;

  constructor(private http: HttpClient, private tostr: ToastrService, private router: Router, private route: ActivatedRoute) {

  }

  contratar() {
    this.tostr.success('Contratado com Sucesso!', 'Contratação de Funcionário');
  }


  voltarButton() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/funcionarios/').subscribe({
      next: (data: any) => {
        if (this.route.snapshot.queryParamMap.get('filter')) {
          this.funcionarios = data.filter((x: any) => x.areaDesejada.toLowerCase().includes(this.route.snapshot.queryParamMap.get('filter')!.toLowerCase()));
        } else {
          this.funcionarios = data;
        }
        this.showEmptyMessage = this.funcionarios.length == 0;

      },
      error: (err) => {
        this.tostr.error('Ocorreu um erro ao listar funcionarios!');
      }
    })
  }
}
