import { Component, OnInit } from '@angular/core';
import { CadPessoa } from '../Models/CadPessoa.models';
import { FormGroup, FormControl } from '@angular/forms';
import { TipoCadastro } from '../Models/TipoCadastro';
import { TipoCadastroServices } from '../Services/TipoCadastroServices';
import { FamiliaServices } from '../Services/FamiliaServices';
import { Familia } from '../Models/Familia';
import { UFServices } from '../Services/UFServices';
import { UF } from '../Models/UF';

@Component({
  selector: 'app-cad-pessoa',
  templateUrl: './cad-pessoa.component.html',
  styleUrls: ['./cad-pessoa.component.css']
})
export class CadPessoaComponent implements OnInit {
  formCadPessoa: FormGroup;


  constructor(
    private TipoCadastroServices: TipoCadastroServices,
    private FamiliaServices: FamiliaServices,
    private UFServices: UFServices
  ) { }

  public tipoCad: TipoCadastro[];
  public tipoFamilia: Familia[];
  public tipoUF: UF[];

  ngOnInit() {
    this.TipoCadastroServices.getAllTipoCadastro().subscribe(
      tiposCad => {
        this.tipoCad = tiposCad
        console.log(tiposCad)
      }
    )

    this.FamiliaServices.getAllFamilia().subscribe(
      tiposFamilia => {
        this.tipoFamilia = tiposFamilia
        console.log(tiposFamilia)
      }
    )

    this.UFServices.getAllUF().subscribe(
      tiposUF => {
        this.tipoUF = tiposUF
        console.log(tiposUF)
      }
    )

    this.createForm(new CadPessoa());
  }
  createForm(cadpessoa: CadPessoa) {
    this.formCadPessoa = new FormGroup({
      id: new FormControl(cadpessoa.id),
      tipoPessoa: new FormControl(cadpessoa.tipoPessoa),
      familia: new FormControl(cadpessoa.familia),
      cpf: new FormControl(cadpessoa.cpf),
      rg: new FormControl(cadpessoa.rg),
      sexo: new FormControl(cadpessoa.sexo),
      nome: new FormControl(cadpessoa.nome),
      apelido: new FormControl(cadpessoa.apelido),
      data: new FormControl(cadpessoa.data),
      endereco: new FormControl(cadpessoa.endereço),
      numero: new FormControl(cadpessoa.numero),
      pontoRef: new FormControl(cadpessoa.pontoRef),
      bairro: new FormControl(cadpessoa.bairro),
      cep: new FormControl(cadpessoa.cep),
      uf: new FormControl(cadpessoa.uf),
      cidade: new FormControl(cadpessoa.cidade),
      residente: new FormControl(cadpessoa.residente),
      comercial: new FormControl(cadpessoa.comercial),
      celular1: new FormControl(cadpessoa.comercial),
      celular2: new FormControl(cadpessoa.celular2),
      vendedor: new FormControl(cadpessoa.vendedor),
      crediario: new FormControl(cadpessoa.crediario),
      limiteCred: new FormControl(cadpessoa.limiteCred),
      observacao: new FormControl(cadpessoa.obeservacao),
    })
  }

  onSubmit() {
    console.log(this.formCadPessoa.value)

    this.createForm(new CadPessoa());
  }

}
