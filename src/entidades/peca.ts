import { TIMEOUT } from "dns";

export class Pecas {
    private nome:string;
    private marca:string;
    private quantidaDeEstoque:number;
    private idDaPeca:number;
    private TipoDoProduto:string;


    constructor (nome:string,marca:string,quantidadeDeEstoque:number,idDapeca:number,TipoDoProduto:string){
        this.nome = nome;
        this.marca = nome;
        this.quantidaDeEstoque = quantidadeDeEstoque;
        this.idDaPeca = idDapeca;
        this.TipoDoProduto = TipoDoProduto;
    }


}