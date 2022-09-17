export type IObjectGeneric = { [x: string]: string | number | null };

export type IQueryOperacao = 'contendo' | 'iniciando' | 'igual';

export interface IFilters {
  pagina?: number;
  quantidade?: number;
  columnToOrder?: string;
  order?: 'ASC' | 'DESC';
  column?: string | undefined;
  value?: string | undefined;
  operacao?: IQueryOperacao;
}

export interface IQueryFilters {
  take: number;
  skip: number;
  columnToOrder: string;
  order: 'ASC' | 'DESC';
  column: string;
  value: string | number;
}
