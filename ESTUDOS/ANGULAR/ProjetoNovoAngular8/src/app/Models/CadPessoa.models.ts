export class CadPessoa {
    id: number;
    tipoPessoa: number = 1;
    familia: number = 1;
    cpf: string;
    rg: number;
    sexo: number = 1;
    nome: string;
    apelido: string;
    data: Date;
    endereço: string;
    numero: number;
    pontoRef: string;
    bairro: string;
    cep: number;
    uf: number = 1;
    cidade: string;
    residente: number;
    comercial: number
    celular1: number;
    celular2: number;
    vendedor: number = 1;
    crediario: number = 1;
    limiteCred: number;
    obeservacao: string;
}
