import { Router } from 'express';
import {
  validateCodigoParams,
  validateCreateProdutoBody,
} from './validations/produtos';
import createProdutoFactory from '../modules/produtos/factories/createProdutoFactory';
import buscarProdutoPeloCodigoFactory from '../modules/produtos/factories/buscarProdutoPeloCodigoFactory'

const router = Router();

router.get('/produtos/:codigo', validateCodigoParams, buscarProdutoPeloCodigoFactory);
router.post('/produtos', validateCreateProdutoBody, createProdutoFactory);

export default router;
