import ExceptionError from "../../../errors/exception-error";
import FakeProdutosRepository from "../../../mochs/repositories/FakeProdutosRepository";
import EditarProdutoService from "../services/EditarProdutoService";

let produtosRepository: FakeProdutosRepository;
let editarProdutoService: EditarProdutoService;

describe('Teste CriarProdutoService', () => {
  beforeEach(() => {
    produtosRepository = new FakeProdutosRepository();
    editarProdutoService = new EditarProdutoService(produtosRepository);
  });

  test('Editar produto', async () => {
    expect(editarProdutoService.execute({
      codigo: 1,
      alteracoes: {
        descricao: 'Macbook Air',
        peso: 500,
        preco: 5000,
        quantidadeEmbalagem: 1,
        tipoEmbalagem: 1,
      }
    })).resolves;
  });

  test('Não encontrar o produto a partir do código para ser editado!', async () => {
    expect(
      editarProdutoService.execute({
        codigo: 1251,
        alteracoes: {
          descricao: 'Macbook Air Teste',
        }
      })
    ).rejects.toBeInstanceOf(ExceptionError)
  });

  test('Não criar um produto com o tipo de embalagem 1 (Unidade) com a quantidade diferente de 1', async () => {
    expect(
      editarProdutoService.execute({
        codigo: 1,
        alteracoes: {
          tipoEmbalagem: 1,
          quantidadeEmbalagem: 2,
        }
      })
    ).rejects.toBeInstanceOf(ExceptionError)
  });

  test('Não criar um produto com o tipo de embalagem diferente de 1 (Caixa ou Pack) com a quantidade igual a 1', async () => {
    expect(
      editarProdutoService.execute({
        codigo: 1,
        alteracoes: {
          tipoEmbalagem: 2,
          quantidadeEmbalagem: 1,
        }
      })
    ).rejects.toBeInstanceOf(ExceptionError)
  });
});
