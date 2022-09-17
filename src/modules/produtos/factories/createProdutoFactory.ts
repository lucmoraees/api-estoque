import { Request, Response } from 'express';
import dataSource from '../../../database';
import ProdutosRepository from '../../../database/repositories/ProdutosRepository';
import CreateProdutoController from '../controllers/CreateProdutoController';
import CreateProdutoService from '../services/CreateProdutoService';

const createProdutoFactory = (req: Request, res: Response) => {
  const produtoRepository = dataSource.manager.withRepository(ProdutosRepository);
  const createProdutoService = new CreateProdutoService(produtoRepository);
  const createProdutoController = new CreateProdutoController(createProdutoService);

  return createProdutoController.execute(req, res);
}

export default createProdutoFactory;
