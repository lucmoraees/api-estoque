import { ICreateProduto } from "../../../@types";
import ProdutoRepository from "../../../database/repositories/ProdutosRepository";
import ExceptionError from '../../../errors/exception-error';

class CreateProdutoService {
  constructor(private produtoRepository: typeof ProdutoRepository) {}

  async execute(params: ICreateProduto) {
    const {
      descricao,
      quantidadeEmbalagem,
      tipoEmbalagem,
    } = params;

    const produtoExists = await this.produtoRepository.findByDescricao(descricao);

    if (produtoExists) {
      throw new ExceptionError('Produto já cadastrado com essa descrição!', 409);
    }

    if (tipoEmbalagem === 1 && quantidadeEmbalagem !== 1) {
      throw new ExceptionError('Produtos com o tipo de embalagem unidade devem possuir quantidade por embalagem igual a 1!', 404);
    }

    if (tipoEmbalagem !== 1 && quantidadeEmbalagem === 1) {
      throw new ExceptionError('Produtos com o tipo de embalagem pack ou caixa devem possuir quantidade por embalagem maior que 1!', 404);
    }

    const novoProduto = await this.produtoRepository.createProduto(params);

    return novoProduto;
  }
}

export default CreateProdutoService;
