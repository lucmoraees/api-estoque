import { Request, Response } from 'express';
import ProdutosRepository from '../../../database/repositories/ProdutosRepository';
import BuscarProdutoPeloCodigoController from '../controllers/BuscarProdutoPeloCodigoController';
import BuscarProdutoPeloCodigoService from '../services/BuscarProdutoPeloCodigoService';

const buscarProdutoPeloCodigoFactory = (req: Request, res: Response) => {
  const produtosRepository = new ProdutosRepository();
  const buscarProdutoPeloCodigoService = new BuscarProdutoPeloCodigoService(produtosRepository);
  const buscarProdutoPeloCodigoController = new BuscarProdutoPeloCodigoController(
    buscarProdutoPeloCodigoService,
  );

  return buscarProdutoPeloCodigoController.execute(req, res);
};

export default buscarProdutoPeloCodigoFactory;
