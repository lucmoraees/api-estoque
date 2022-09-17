import { Request, Response } from "express";
import DeletarProdutoService from "../services/DeletarProdutoService";

class DeletarProdutoController {
  constructor(private deletarProdutoService: DeletarProdutoService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const { codigo } = req.params;

      await this.deletarProdutoService.execute({ codigo: Number(codigo) });

      return res.status(204).json();
    } catch (error) {
      return res.status(error.statusCode || 404).json(error);
    }
  }
}

export default DeletarProdutoController;
