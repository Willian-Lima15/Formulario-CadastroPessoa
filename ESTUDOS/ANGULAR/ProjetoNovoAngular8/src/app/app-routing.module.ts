import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadPessoaComponent } from './pages/cad-pessoa/cad-pessoa.component';
import { TabEmailComponent } from './pages/tab-email/tab-email.component';
import { TabEnderecoComponent } from './pages/tab-endereco/tab-endereco.component';



const routes: Routes = [
  { path: 'tab-endereco', component: TabEnderecoComponent },
  { path: 'cad-pessoa', component: CadPessoaComponent },
  { path: 'tab-email', component: TabEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
