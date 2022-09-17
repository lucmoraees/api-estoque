import { IFilters } from "../../../@types";
import Produto from "../../../database/entities/Produto";
import ProdutosRepository from "../../../database/repositories/ProdutosRepository";
import { buildTotalPaginas, buildValudByOperacao } from '../../../utils';

interface IParams {
  filters: IFilters;
}

interface IResponse {
  data: Produto[],
  totalPaginas: number;
  totalRegistros: number;
}

class BuscarProdutosService {
  constructor(private produtosRepository: typeof ProdutosRepository) {}

  async execute({ filters }: IParams): Promise<IResponse> {
    const quantidadeToSkip = filters.pagina && filters.pagina > 1 ? filters.quantidade * (filters.pagina - 1) : 0;
    
    const quantidade = filters.quantidade || 10;

    const filtros = {
      take: quantidade,
      skip: quantidadeToSkip,
      columnToOrder: filters.columnToOrder || 'codigo',
      order: filters.order || 'DESC',
      column: filters.column,
      value: buildValudByOperacao(filters.value, filters.operacao),
    };

    const { data, count } = await this.produtosRepository.findWithFilters(filtros);

    const totalPaginas = buildTotalPaginas(count, quantidade);

    return { data, totalPaginas, totalRegistros: count };
  }
}

export default BuscarProdutosService;
