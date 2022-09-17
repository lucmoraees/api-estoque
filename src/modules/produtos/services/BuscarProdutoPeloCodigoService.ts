import ProdutosRepository from "../../../database/repositories/ProdutosRepository";
import ExceptionError from "../../../errors/exception-error";

interface IParams {
  codigo: number;
}

class BuscarProdutoPeloCodigoService {
  constructor(private produtosRepository: typeof ProdutosRepository) {}

  async execute({ codigo }: IParams) {
    const produto = await this.produtosRepository.findByCodigo(codigo);

    if (!produto) {
      throw new ExceptionError('Produto não encontrado!', 404);
    }

    return produto;
  }
}

export default BuscarProdutoPeloCodigoService;
