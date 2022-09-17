import { Router } from 'express';
import createProdutoFactory from '../modules/produtos/factories/createProdutoFactory';
import {
  validateParamsCreateProduto,
} from './validations/produtos';

const router = Router();

router.post('/produtos', validateParamsCreateProduto, createProdutoFactory);

export default router;
