import { IAlteracoesProduto, IProdutosRepository } from "../../../@types";
import ExceptionError from "../../../errors/exception-error";

interface IParams {
  codigo: number,
  alteracoes: IAlteracoesProduto,
}

class EditarProdutoService {
  constructor(private produtosRepository: IProdutosRepository) {}

  async execute({ codigo, alteracoes }: IParams): Promise<void> {
    const produtoExists = await this.produtosRepository.findByCodigo(codigo);

    if (!produtoExists) {
      throw new ExceptionError('Produto não enconstrado!', 404);
    }

    if (alteracoes?.tipoEmbalagem === 1 && alteracoes?.quantidadeEmbalagem !== 1) {
      throw new ExceptionError('Produtos com o tipo de embalagem unidade devem possuir quantidade por embalagem igual a 1!', 404);
    }

    if (alteracoes?.tipoEmbalagem !== 1 && alteracoes?.quantidadeEmbalagem === 1) {
      throw new ExceptionError('Produtos com o tipo de embalagem pack ou caixa devem possuir quantidade por embalagem maior que 1!', 404);
    }

    await this.produtosRepository.updateProduto({ codigo, alteracoes });
  }
}

export default EditarProdutoService;
