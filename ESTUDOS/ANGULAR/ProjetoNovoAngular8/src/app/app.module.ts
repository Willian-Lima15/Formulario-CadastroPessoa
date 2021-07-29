import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CurrencyMaskModule } from 'ngx-currency-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadPessoaComponent } from './pages/cad-pessoa/cad-pessoa.component';
import { TipoCadastroServices } from './Services/TipoCadastroServices';
import { HttpClientModule } from '@angular/common/http';
import { TabEnderecoComponent } from './pages/tab-endereco/tab-endereco.component';
import { TabEmailComponent } from './pages/tab-email/tab-email.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    CadPessoaComponent,
    TabEnderecoComponent,
    TabEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfig),
    CurrencyMaskModule
  ],
  providers: [TipoCadastroServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

