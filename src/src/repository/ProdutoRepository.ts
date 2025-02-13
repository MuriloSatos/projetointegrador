import { Pool } from "pg";
import { Database } from "./Database";
import { Produto } from "../entidades/produto";




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


}