import { ProdutoRepositoryJson } from "../repositories/json/produtoRepositoryJson";
import { ProdutoRepositoryInterface } from "../repositories/produtoRepositoryInterface";

export class ProdutoService {

    produtoRepository: ProdutoRepositoryInterface

    constructor(produtoRepository: ProdutoRepositoryInterface) {
        this.produtoRepository = produtoRepository
    }

    cadastrarProduto(nomeProduto: String) {        
        return this.produtoRepository.salvar(nomeProduto);
    }

    buscarProduto(produtoId: String) {
        return this.produtoRepository.buscarPorId(produtoId);
    }
}