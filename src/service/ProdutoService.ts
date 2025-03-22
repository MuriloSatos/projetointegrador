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


    public async buscarcod(codigoproduto:number): Promise<Produto[]> {
        let lista: Produto[] = []
        lista = await this.repo.buscarcod(codigoproduto)
     return lista 
    }
  
    public async inserirProduto(codigoproduto : number,nomeproduto : string,tipoproduto : string,preco : number ,tamanhoproduto : string,marcaproduto : string) {
      
        
        const nomevalido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        if (!nomevalido.test(nomeproduto)) {
            console.log("Nome do produto deve conter apenas letras.");
        return }
        if (preco <= 0) {
            console.log("O preço do produto deve ser um valor positivo.");
        return}







        return await this.repo.inserirProduto(codigoproduto, nomeproduto, tipoproduto, preco,tamanhoproduto,marcaproduto);
    }

    public async deletarProduto(codigoproduto:number):Promise<Produto[]>{
        let lista: Produto[] = []
        lista = await this.repo.deletarProduto(codigoproduto)
        if(lista.length == 0){
            console.log("Nao encontramos o codigo do produto para deletar ")
        }
        return lista
      


    }

    public async atualizarproduto(codigoproduto: number, preco: number): Promise<Produto[]> {
        try {
    
            // Verificar se o produto com o código existe
            const produtoExistente = await this.repo.buscarcod(codigoproduto)
            if (produtoExistente.length === 0) {
                throw new Error('Produto não encontrado para atualização.');
            }

            return await this.repo.atualizarproduto(codigoproduto , preco)
        } catch (err) {
            throw new Error('Erro ao atualizar o produto: ' + err.message);
        }
    }
    

}
