import { Request, Response } from "express";
import dataSource from "../../../database";
import ProdutosRepository from "../../../database/repositories/ProdutosRepository";
import DeletarProdutoController from "../controllers/DeletarProdutoController";
import DeletarProdutoService from "../services/DeletarProdutoService";

const deletarProdutoFactory = (req: Request, res: Response) => {
  const produtosRepository = dataSource.manager.withRepository(ProdutosRepository);
  const deletarProdutoService = new DeletarProdutoService(produtosRepository);
  const deletarprodutoController = new DeletarProdutoController(deletarProdutoService);

  return deletarprodutoController.execute(req, res);
}

export default deletarProdutoFactory;
