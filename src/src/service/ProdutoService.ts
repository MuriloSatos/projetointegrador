import { Produto } from "../entidades/produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";



export class ProdutoService {

    private repo: ProdutoRepository
    constructor() {
        this.repo = new ProdutoRepository();
    }

    async listarProdutos(): Promise<Produto[]> {

        return await this.repo.listarProdutos()
    }
}