/* eslint-disable no-undef */
import FakeProdutosRepository from '../../../mochs/repositories/FakeProdutosRepository';
import ExceptionError from '../../../errors/exception-error';
import BuscarProdutoPeloCodigoService from '../services/BuscarProdutoPeloCodigoService';

let produtosRepository: FakeProdutosRepository;
let buscarProdutoPeloCodigoService: BuscarProdutoPeloCodigoService;

describe('Teste BuscarProdutoPeloCodigoService', () => {
  beforeEach(() => {
    produtosRepository = new FakeProdutosRepository();
    buscarProdutoPeloCodigoService = new BuscarProdutoPeloCodigoService(produtosRepository);
  });

  test('Encontrar o produto a partir do código', async () => {
    const produto = await buscarProdutoPeloCodigoService.execute({ codigo: 1 });

    expect(produto).toHaveProperty('codigo');
    expect(produto.codigo).toEqual(1);
  });

  test('Não encontrar o produto a partir do código', async () => {
    expect(
      buscarProdutoPeloCodigoService.execute({ codigo: 1215 }),
    ).rejects.toBeInstanceOf(ExceptionError);
  });
});
