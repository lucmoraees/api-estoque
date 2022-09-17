import { ICreateProduto } from '../../@types';
import dataSource from '../../database';
import Produto from '../entities/Produto';

const ProdutosRepository = dataSource.getRepository(Produto).extend({
  async findByDescricao(descricao: string): Promise<Produto | undefined> {
    const produto = await ProdutosRepository.findOne({ where: { descricao } });

    return produto;
  },

  async createProduto(paramsCreate: ICreateProduto): Promise<Produto> {
    const novoProduto = ProdutosRepository.create(paramsCreate);

    await ProdutosRepository.save(novoProduto);
    
    return novoProduto;
  },

  async findByCodigo(codigo: number): Promise<Produto | undefined> {
    const produto = await ProdutosRepository.findOne({ where: { codigo } });

    return produto;
  }
});

export default ProdutosRepository;
