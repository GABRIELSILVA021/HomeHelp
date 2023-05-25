import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchItem = "";
  constructor(private router: Router) {
  }
  
  goToSearch() {
    this.router.navigate([`/listar-funcionario`], { queryParams: { filter: this.searchItem } })
  }
}
