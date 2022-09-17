/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { IFilters } from '../../../@types';
import BuscarProdutosService from '../services/BuscarProdutosService';

class BuscarProdutosController {
  constructor(private buscarProdutosService: BuscarProdutosService) {}

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const filters = req.query as unknown as IFilters;

      const response = await this.buscarProdutosService.execute({ filters });

      return res.json(response);
    } catch (error) {
      return res.status(error.statusCode || 400).json(error);
    }
  }
}

export default BuscarProdutosController;
