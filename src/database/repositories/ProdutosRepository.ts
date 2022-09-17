import {
  ICreateProduto,
  IQueryFilters,
  IUpdateProduto,
} from '../../@types';
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
  },
  
  async findWithFilters(filtros: IQueryFilters): Promise<{ data: Produto[], count: number }> {
    const [data, count] = await ProdutosRepository
      .createQueryBuilder()
      .where(':column like :value', { column: filtros.column, value: filtros.value })
      .take(filtros.take)
      .skip(filtros.skip)
      .orderBy(filtros.columnToOrder, filtros.order)
      .getManyAndCount();

    return { data, count };
  },

  async updateProduto({ codigo, alteracoes }: IUpdateProduto): Promise<void> {
    await ProdutosRepository
      .createQueryBuilder()
      .update(Produto)
      .set(alteracoes)
      .where('codigo = :codigo', { codigo })
      .execute();

    return;
  },

  async deleteProduto(codigo: number): Promise<void> {
    await ProdutosRepository
      .createQueryBuilder()
      .delete()
      .where('codigo = :codigo', { codigo })
      .execute();

    return;
  }
});

export default ProdutosRepository;
