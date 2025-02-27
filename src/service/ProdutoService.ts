import { Produto } from "../entidades/produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoService {

    private repo: ProdutoRepository
    constructor() {
        this.repo = new ProdutoRepository();
    }

    public async listarProdutos(): Promise<Produto[]> {

        return await this.repo.listarProdutos()
    }


    public async buscarPorCpf(cpf: string): Promise<Cliente[]> {
        let lista: Cliente[] = []
        lista = await this.repo.buscarPorCpf(cpf)
        if (lista.length==0 ) {
            throw new Error("Nao encontrei o cpf " + cpf)
        }
        else {
            console.log("encontrei o cpf " + lista)
        }
        
        return lista
    }

    public async inserirCliente(nome: string, senha: string, cpf: string, email: string) {
        const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValido = valido.test(email)
        if (!emailValido) {
            throw new Error("Email invalido")
        }
        return await this.repo.inserirCliente(nome, senha, cpf, email);
    }

    public async deletarCliente(cpf: string):Promise<Cliente[]>{
        let lista: Cliente[] = []
        lista = await this.repo.deletarCliente(cpf)
        return lista
      


    }
    
}