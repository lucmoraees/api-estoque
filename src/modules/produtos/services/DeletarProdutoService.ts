import ProdutosRepository from "../../../database/repositories/ProdutosRepository";
import ExceptionError from "../../../errors/exception-error";

interface IParams {
  codigo: number;
}

class DeletarProdutoService {
  constructor(private produtosRepository: typeof ProdutosRepository) {}

  async execute({ codigo }: IParams): Promise<void> {
    const produtoExists = await this.produtosRepository.findByCodigo(codigo);
  
    if (!produtoExists) {
      throw new ExceptionError('Produto não encontrado!', 404)
    }

    await this.produtosRepository.deleteProduto(codigo);
  }
}

export default DeletarProdutoService;
