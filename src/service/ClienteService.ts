import { Cliente } from "../entidades/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";

export class ClienteService{

     private repo : ClienteRepository
    constructor(){
        this.repo =  new ClienteRepository();
    }

     async listarClientes():Promise<Cliente[]>{

       return await this.repo.listarClientes()
    }
}