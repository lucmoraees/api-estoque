import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import Produto from '../database/entities/Produto';

export interface ICreateProduto {
  descricao: string;
  preco: number;
  tipoEmbalagem: number;
  quantidadeEmbalagem: number;
  peso: number;
}

export type IAlteracoesProduto = QueryDeepPartialEntity<Produto>

export interface IUpdateProduto {
  codigo: number;
  alteracoes: IAlteracoesProduto;
}
