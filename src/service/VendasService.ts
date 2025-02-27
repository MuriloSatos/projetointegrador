import { Vendas } from "../entidades/Vendas";
import { VendasRepository } from "../repository/VendasRepository";

export class VendasService {

    private repo: VendasRepository
    constructor() {
        this.repo = new VendasRepository();
    }

    async listarVendas(): Promise<Vendas[]> {

        return await this.repo.listarVendas()
    }

    public async inserirVenda(email : string,codigoproduto : number,datavenda : Date,codigovendas : number,peçaquantidade : number,valortotal : number,statusvendas : string) {
        return  await this.repo.inserirVenda(email,codigoproduto,datavenda,codigovendas,peçaquantidade ,valortotal,statusvendas)
    
    
    
    }
  
}

