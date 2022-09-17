/* eslint-disable no-unused-vars */
import Produto from '../database/entities/Produto';
import { IQueryFilters } from './global';
import { ICreateProduto, IUpdateProduto } from './produtos';

export interface IProdutosRepository {
  findByDescricao(descricao: string): Promise<Produto | undefined>
  createProduto(paramsCreate: ICreateProduto): Promise<Produto>
  findByCodigo(codigo: number): Promise<Produto | undefined>
  findWithFilters(filtros: IQueryFilters): Promise<{
    data: Produto[];
    count: number;
  }>
  updateProduto({ codigo, alteracoes }: IUpdateProduto): Promise<void>
  deleteProduto(codigo: number): Promise<void>
}
