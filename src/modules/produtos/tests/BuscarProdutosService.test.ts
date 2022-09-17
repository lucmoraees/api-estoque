import FakeProdutosRepository from "../../../mochs/repositories/FakeProdutosRepository";
import BuscarProdutosService from "../services/BuscarProdutosService";

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
