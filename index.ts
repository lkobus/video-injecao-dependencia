import { ProdutoRepositoryCSV } from "./repositories/csv/produtoRepositoryCSV";
import { ProdutoRepositoryJson } from "./repositories/json/produtoRepositoryJson";
import { ProdutoService } from "./services/ProdutoService";


var repositoryJson = new ProdutoRepositoryJson();
var repositoryCSV = new ProdutoRepositoryCSV();

var produtoService = new ProdutoService(repositoryJson)

//var id = produtoService.cadastrarProduto("Ultimo teste")
var id = "ff254248-7b34-4ebf-99b3-b6f684ccc623"
console.log(`Produto cadastrado com sucesso ID: ${id}`)

var prod = produtoService.buscarProduto(id)

console.log("Produto encontrado : " + JSON.stringify(prod))