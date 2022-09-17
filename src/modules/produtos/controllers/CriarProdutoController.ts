import FakeProdutosRepository from "../../../mochs/repositories/FakeProdutosRepository";
import CriarProdutoService from "../services/CriarProdutoService";

let produtosRepository: FakeProdutosRepository;
let criarProdutoService: CriarProdutoService;

describe('Teste BuscarProdutoPeloCodigoService', () => {
  beforeEach(() => {
    produtosRepository = new FakeProdutosRepository()
    criarProdutoService = new CriarProdutoService(produtosRepository);
  });

  test('Criar um produto', async () => {
    const produto = await criarProdutoService.execute({
      descricao: 'Macbook Air',
      peso: 500,
      preco: 5000,
      quantidadeEmbalagem: 1,
      tipoEmbalagem: 1,
    });
    
    expect(produto).toHaveProperty('id')
  });
});
