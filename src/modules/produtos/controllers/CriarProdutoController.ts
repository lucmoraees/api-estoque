import { Request, Response } from 'express';
import CriarProdutoService from '../services/CriarProdutoService';

class CriarProdutoController {
  constructor(private criarProdutoService: CriarProdutoService) {}
  
  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const produto = await this.criarProdutoService.execute(req.body);
      
      return res.json(produto);
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  }
}

export default CriarProdutoController;
