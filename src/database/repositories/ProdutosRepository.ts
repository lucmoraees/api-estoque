import { Repository } from 'typeorm';
import {
  ICreateProduto,
  IProdutosRepository,
  IQueryFilters,
  IUpdateProduto,
} from '../../@types';
import dataSource from '../../database';
import Produto from '../entities/Produto';

class ProdutosRepository implements IProdutosRepository {
  private ormRepository: Repository<Produto>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Produto);
  }

  async findByDescricao(descricao: string): Promise<Produto | undefined> {
    const produto = await this.ormRepository.findOne({ where: { descricao } });

    return produto;
  }

  async createProduto(paramsCreate: ICreateProduto): Promise<Produto> {
    const novoProduto = this.ormRepository.create(paramsCreate);

    await this.ormRepository.save(novoProduto);
    
    return novoProduto;
  }

  async findByCodigo(codigo: number): Promise<Produto | undefined> {
    const produto = await this.ormRepository.findOne({ where: { codigo } });

    return produto;
  }
  
  async findWithFilters(filtros: IQueryFilters): Promise<{ data: Produto[], count: number }> {
    const [data, count] = await this.ormRepository
      .createQueryBuilder()
      .where(':column like :value', { column: filtros.column, value: filtros.value })
      .take(filtros.take)
      .skip(filtros.skip)
      .orderBy(filtros.columnToOrder, filtros.order)
      .getManyAndCount();

    return { data, count };
  }

  async updateProduto({ codigo, alteracoes }: IUpdateProduto): Promise<void> {
    await this.ormRepository
      .createQueryBuilder()
      .update(Produto)
      .set(alteracoes)
      .where('codigo = :codigo', { codigo })
      .execute();

    return;
  }

  async deleteProduto(codigo: number): Promise<void> {
    await this.ormRepository
      .createQueryBuilder()
      .delete()
      .where('codigo = :codigo', { codigo })
      .execute();

    return;
  }
}

export default ProdutosRepository;
