import { Pool } from "pg";
import { Database } from "./Database";
import { Produto } from "../entidades/produto";
import { ProdutoView } from "../View/ProdutoView";




export class ProdutoRepository {

    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }

    async listarProdutos(): Promise<Produto[]> {

        const query = "SELECT * FROM sistema.produto";
        const result = await this.pool.query(query);
        console.log("vou mostrar o result")
        //console.log(result)
        const listaProduto: Produto[] = [];

        for (const row of result.rows) {
            //console.log(row)
            const produto1 = new Produto(row.codigoproduto, row.nomeproduto, row.tipoproduto, row.preco, row.tamanhoproduto, row.marcaproduto);
            listaProduto.push(produto1);

        }


        return listaProduto;
    }

    public async inserirProduto (codigoproduto : number,nomeproduto: string, tipoproduto	:string,preco:number,tamanhoproduto:string,marcaproduto:string){
        let query = "INSERT INTO sistema.produto (codigoproduto,nomeproduto,tipoproduto,preco,tamanhoproduto,marcaproduto) VALUES ($1,$2,$3,$4,$5,$6)"
            await this.pool.query(query, [codigoproduto,nomeproduto,tipoproduto,preco,tamanhoproduto,marcaproduto]);
   
  
  
    }

    public async deletarProduto (codigoproduto:number){
        const query = 'DELETE * FROM sistema.produto where codigoproduto = $1'
        const result = await this.pool.query(query,[codigoproduto])
        return result.rows
       
    }

}