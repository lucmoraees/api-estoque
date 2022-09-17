import FakeProdutosRepository from "../../../mochs/repositories/FakeProdutosRepository";
import ExceptionError from "../../../errors/exception-error";
import DeletarProdutoService from "../services/DeletarProdutoService";

let produtosRepository: FakeProdutosRepository;
let deletarProdutoService: DeletarProdutoService;

describe('Teste DeletarProdutoService', () => {
  beforeEach(() => {
    produtosRepository = new FakeProdutosRepository()
    deletarProdutoService = new DeletarProdutoService(produtosRepository);
  });

  test('Deletar o produto', async () => {
    expect(deletarProdutoService.execute({ codigo: 1 })).resolves;
  });

  test('Não encontrar o produto a partir do código para ser deletado!', async () => {
    expect(
      deletarProdutoService.execute({ codigo: 1215 })
    ).rejects.toBeInstanceOf(ExceptionError)
  });
});
