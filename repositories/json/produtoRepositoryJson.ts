import { randomUUID } from "crypto"
import { readFileSync, writeFileSync } from "fs"
import { ProdutoEntity } from "../../entities/ProdutoEntity"

export class ProdutoRepositoryJson {

    filePath: string 

    constructor() {
        this.filePath = "D:\\projeto\\video-injecao-dependency\\collection.json"
    }

    salvar(nome: String): String {
        var file = readFileSync(this.filePath)
        var dataset = JSON.parse(file.toString())
        var id = randomUUID()
        var produto = new ProdutoEntity(nome, id);
        dataset.push(produto)
        writeFileSync(this.filePath, JSON.stringify(dataset))
        return produto.id
    }
        
    buscarPorId(id: String) : ProdutoEntity{
        var file = readFileSync(this.filePath)
        var dataset = JSON.parse(file.toString())
        var resultado = null
        dataset.forEach(produto => {
            if (produto.id === id){
                resultado = produto
            }
        });
        return resultado
    }
}