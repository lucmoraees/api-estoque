import { Request, Response } from "express";
import EditarProdutoService from "../services/EditarProdutoService";

class EditarProdutoController {
  constructor(private editarProdutoService: EditarProdutoService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const { codigo } = req.params;
      const alteracoes = req.body;

      await this.editarProdutoService.execute({
        codigo: Number(codigo),
        alteracoes,
      });

      return res.status(204).json();
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  }
}

export default EditarProdutoController;
