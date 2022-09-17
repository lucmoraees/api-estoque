import { Request, Response } from "express";
import dataSource from "../../../database";
import ProdutosRepository from "../../../database/repositories/ProdutosRepository";
import BuscarProdutosController from "../controllers/BuscarProdutosController";
import BuscarProdutosService from "../services/BuscarProdutosService";

const buscarProdutosFactory = (req: Request, res: Response) => {
  const produtosRepository = dataSource.manager.withRepository(ProdutosRepository);
  const buscarProdutosService = new BuscarProdutosService(produtosRepository); 
  const buscarProdutosController = new BuscarProdutosController(buscarProdutosService);

  return buscarProdutosController.execute(req, res);
};

export default buscarProdutosFactory;
