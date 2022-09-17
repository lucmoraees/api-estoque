import FakeProdutosRepository from "../../../mochs/repositories/FakeProdutosRepository";
import ExceptionError from "../../../errors/exception-error";
import BuscarProdutosService from "../services/BuscarProdutosService";
import Produto from "../../../database/entities/Produto";

let produtosRepository: FakeProdutosRepository;
let buscarProdutosService: BuscarProdutosService;

describe('Teste BuscarProdutosService', () => {
  beforeEach(() => {
    produtosRepository = new FakeProdutosRepository()
    buscarProdutosService = new BuscarProdutosService(produtosRepository);
  });

  test('Buscar lista de produtos', async () => {
    const filters = { quantidade: 2 }
    const { data, totalPaginas, totalRegistros } = await buscarProdutosService.execute({ filters });
   
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeLessThanOrEqual(filters.quantidade);
    expect(typeof totalPaginas).toBe('number');
    expect(typeof totalRegistros).toBe('number');
  });
});
