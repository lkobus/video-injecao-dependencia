import { ProdutoEntity } from "../entities/ProdutoEntity"

export interface ProdutoRepositoryInterface {

    salvar(nome: String): String
    buscarPorId(id: String) : ProdutoEntity
}