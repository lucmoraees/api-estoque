import { Request, Response } from 'express';
import CreateProdutoService from '../services/CreateProdutoService';

class CreateProdutoController {
  constructor(private createProdutoService: CreateProdutoService) {}
  
  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const produto = await this.createProdutoService.execute(req.body);
      
      return res.json(produto);
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  }
}

export default CreateProdutoController;
