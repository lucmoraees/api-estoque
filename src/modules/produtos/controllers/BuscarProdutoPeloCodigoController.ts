import { Request, Response } from 'express';
import BuscarProdutoPeloCodigoService from '../services/BuscarProdutoPeloCodigoService';

class BuscarProdutoPeloCodigoController {
  constructor(private buscarProdutoPeloCodigoService: BuscarProdutoPeloCodigoService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const { codigo } = req.params;

      const produto = await this.buscarProdutoPeloCodigoService.execute({ codigo: Number(codigo) });

      return res.json(produto);
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  }
}

export default BuscarProdutoPeloCodigoController;
