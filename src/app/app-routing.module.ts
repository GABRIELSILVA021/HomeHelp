import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/shared/guard/auth.guard';
import { CadastroFuncionarioComponent } from './pages/cadastro-funcionario/cadastro-funcionario.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { ContratarFuncionarioComponent } from './pages/contratar-funcionario/contratar-funcionario.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarFuncionarioComponent } from './pages/listar-funcionario/listar-funcionario.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent, canActivate: [AuthGuard], },
  { path: 'cadastro-funcionario', component: CadastroFuncionarioComponent, canActivate: [AuthGuard], },
  { path: 'listar-funcionario', component: ListarFuncionarioComponent, canActivate: [AuthGuard], },
  { path: 'contratar-funcionario', component: ContratarFuncionarioComponent, canActivate: [AuthGuard], },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
