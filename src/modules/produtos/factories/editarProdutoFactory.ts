import { Request, Response } from "express";
import ProdutosRepository from "../../../database/repositories/ProdutosRepository";
import EditarProdutoController from "../controllers/EditarprodutoController";
import EditarProdutoService from "../services/EditarProdutoService";

const editarProdutoFactory = (req: Request, res: Response) => {
  const produtosRepository = new ProdutosRepository();
  const editarProdutoService = new EditarProdutoService(produtosRepository);
  const editarProdutoController = new EditarProdutoController(editarProdutoService);

  return editarProdutoController.execute(req, res);
}

export default editarProdutoFactory;
