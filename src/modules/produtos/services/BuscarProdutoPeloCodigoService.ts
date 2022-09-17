/* eslint-disable no-unused-vars */
import { IProdutosRepository } from '../../../@types';
import ExceptionError from '../../../errors/exception-error';

interface IParams {
  codigo: number;
}

class BuscarProdutoPeloCodigoService {
  constructor(private produtosRepository: IProdutosRepository) {}

  async execute({ codigo }: IParams) {
    const produto = await this.produtosRepository.findByCodigo(codigo);

    if (!produto) {
      throw new ExceptionError('Produto não encontrado!', 404);
    }

    return produto;
  }
}

export default BuscarProdutoPeloCodigoService;
