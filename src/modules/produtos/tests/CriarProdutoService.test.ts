import ExceptionError from "../../../errors/exception-error";
import FakeProdutosRepository from "../../../mochs/repositories/FakeProdutosRepository";
import CriarProdutoService from "../services/CriarProdutoService";

let produtosRepository: FakeProdutosRepository;
let criarProdutoService: CriarProdutoService;

describe('Teste CriarProdutoService', () => {
  beforeEach(() => {
    produtosRepository = new FakeProdutosRepository();
    criarProdutoService = new CriarProdutoService(produtosRepository);
  });

  test('Criar produto', async () => {
    const novoProduto = await criarProdutoService.execute({
      descricao: 'Macbook Air',
      peso: 500,
      preco: 5000,
      quantidadeEmbalagem: 1,
      tipoEmbalagem: 1,
    });

    expect(novoProduto).toHaveProperty('codigo');
  });

  test('Não criar dois produtos com a mesma descrição', async () => {
    expect(
      criarProdutoService.execute({
        descricao: 'Macbook Air',
        peso: 500,
        preco: 5000,
        quantidadeEmbalagem: 1,
        tipoEmbalagem: 1,
      })
    ).rejects.toBeInstanceOf(ExceptionError)
  });

  test('Não criar um produto com o tipo de embalagem 1 (Unidade) com a quantidade diferente de 1', async () => {
    expect(
      criarProdutoService.execute({
        descricao: 'Air pods',
        peso: 150,
        preco: 7500,
        tipoEmbalagem: 1,
        quantidadeEmbalagem: 2,
      })
    ).rejects.toBeInstanceOf(ExceptionError)
  });

  test('Não criar um produto com o tipo de embalagem diferente de 1 (Caixa ou Pack) com a quantidade igual a 1', async () => {
    expect(
      criarProdutoService.execute({
        descricao: 'Air pods',
        peso: 150,
        preco: 7500,
        tipoEmbalagem: 2,
        quantidadeEmbalagem: 1,
      })
    ).rejects.toBeInstanceOf(ExceptionError)
  });
});
