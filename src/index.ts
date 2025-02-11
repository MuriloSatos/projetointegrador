

///let usuario1 = new Usuario("Murilo","murilo@gmail.com",51995352856,"1234","Estrada integraçao",1)

import { ClienteService } from "./service/ClienteService";





//usuario1.MostrarUsuario()
//usuario1.AtualizarUser( "murilo.vinicius@gmail.com")
//u/suario1.MostrarUsuario()
//console.log("ola")



//import { Database } from "./repository/Database";
//Database.iniciarConexao()

//import { ClienteRepository } from "./repository/ClienteRepository";

///c/onst repositorio = new ClienteRepository()
//console.table(repositorio.listarClientes())






//import { ClienteRepository } from "./repository/ClienteRepository";
 
//const repositorio = new ClienteRepository();
 
//async function testarListaCliente() {
  //console.table(await repositorio.listarClientes());
//}
 
//testarListaCliente()
 



const servico = new ClienteService();
async function teste() {
  console.table(await servico.listarClientes())
}
teste()
