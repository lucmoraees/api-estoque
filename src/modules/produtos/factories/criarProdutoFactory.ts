import { Request, Response } from 'express';
import ProdutosRepository from '../../../database/repositories/ProdutosRepository';
import CriarProdutoController from '../controllers/CriarProdutoController';
import CriarProdutoService from '../services/CriarProdutoService';

const createProdutoFactory = (req: Request, res: Response) => {
  const produtoRepository = new ProdutosRepository();
  const criarProdutoService = new CriarProdutoService(produtoRepository);
  const criarProdutoController = new CriarProdutoController(criarProdutoService);

  return criarProdutoController.execute(req, res);
};

export default createProdutoFactory;
