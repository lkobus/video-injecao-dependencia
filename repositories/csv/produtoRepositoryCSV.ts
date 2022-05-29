import { randomUUID } from "crypto";
import { appendFileSync, readFileSync, writeFileSync } from "fs";
import { ProdutoEntity } from "../../entities/ProdutoEntity";
import { ProdutoRepositoryInterface } from "../produtoRepositoryInterface";

export class ProdutoRepositoryCSV implements ProdutoRepositoryInterface {

    filePath : string
    constructor(){
        this.filePath = "D:\\projeto\\video-injecao-dependency\\collection.csv"
    }

    salvar(nome: String): String {        
        var id = randomUUID()
        var produto = new ProdutoEntity(nome, id);        
        var toAppend = `${id},${produto.nome}\n`
        appendFileSync(this.filePath, toAppend)
        return produto.id        
    }

    buscarPorId(id: String): ProdutoEntity {
        var file = readFileSync(this.filePath).toString()
        var produto: ProdutoEntity
        file.split('\n').forEach(line => {
            var splited = line.split(',')
            var prodId = splited[0]
            if(id === prodId) {
                produto = new ProdutoEntity(splited[1], splited[0])
            }
        })
        return produto
    }

}