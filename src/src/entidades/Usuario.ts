import { constrainedMemory } from "process";

export class Usuario {
    private nome: string;
    private email: string;
    private celular: number;
    private senha: string;
    private localizacao: string;
    private idUsuario: number;

    constructor(nome: string, email: string, celular: number, senha: string, localizacao: string, idUsuario: number) {
        this.nome = nome;
        this.email = email;
        this.celular = celular;
        this.senha = senha;
        this.localizacao = localizacao;
        this.idUsuario = idUsuario;
    }

    public MostrarUsuario() {
        return console.log("O nome do usuario é  " + this.nome, "o  email ", this.email, " o celular ", this.celular, "a senha dele e ", this.senha, "ele mora na  ", this.localizacao, "o id dele é ", this.idUsuario)
    }

    public AtualizarUser(email1) {
        this.email = email1
        
       
    }








}