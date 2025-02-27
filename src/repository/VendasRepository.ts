import { Pool} from "pg"
import { Vendas } from "../entidades/Vendas"
import { Database } from "./Database"



export class VendasRepository  {
    
    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }

    async listarVendas(): Promise<Vendas[]> {

        const query = "SELECT * FROM sistema.vendas";
        const result = await this.pool.query(query);
    
        const listaVendas: Vendas[] = [];

        for (const row of result.rows) {
       
            const vendas1 = new Vendas(row.email,row.codigoproduto,row.datavenda,row.codigovendas,row.peçaquantidade,row.valortotal,row.statusvendas)
            listaVendas.push(vendas1);

        }


        return listaVendas;
    }
    public async inserirVenda (email : string,codigoproduto : number,datavenda : Date,codigovendas : number,peçaquantidade : number,valortotal : number,statusvendas : string){
        let query = "INSERT INTO sistema.vendas (email,codigoproduto,datavenda,codigovendas,peçaquantidade,valortotal,statusvendas) VALUES ($1,$2,$3,$4,$5,$6,$7)"
            await this.pool.query(query, [email,codigoproduto,datavenda,codigovendas,peçaquantidade ,valortotal,statusvendas]);
   
    }
}