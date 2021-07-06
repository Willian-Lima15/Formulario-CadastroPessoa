export class CadPessoa {
    constructor(
        public id: number = 1,
        public tipoPessoa: number = 1,
        public familia: number = 1,
        public cpf: string = '',
        public rg: number = 1,
        public sexo: number = 1,
        public nome: string = '',
        public apelido: string = '',
        public data: Date = null,
        public endereço: string = '',
        public numero: number = 1,
        public pontoRef: string = '',
        public bairro: string = '',
        public cep: number = 1,
        public uf: number = 1,
        public cidade: string = '',
        public residente: number = 1,
        public comercial: number = 1,
        public celular1: number = 1,
        public celular2: number = 1,
        public vendedor: number = 1,
        public crediario: number = 1,
        public limiteCred: number = 1,
        public obeservacao: string = '',

    ) { }
}
