import { Router } from 'express';
import {
  validateCodigoParams,
  validateCreateProdutoBody,
  validateFiltersQuery,
  validateUpdateProduto,
} from './validations/produtos';
import createProdutoFactory from '../modules/produtos/factories/criarProdutoFactory';
import buscarProdutoPeloCodigoFactory from '../modules/produtos/factories/buscarProdutoPeloCodigoFactory';
import buscarProdutosFactory from '../modules/produtos/factories/buscarProdutosFactory';
import editarProdutoFactory from '../modules/produtos/factories/editarProdutoFactory';
import deletarProdutoFactory from '../modules/produtos/factories/deletarProdutoFactory';

const router = Router();

router.get('/produtos', validateFiltersQuery, buscarProdutosFactory);
router.get('/produtos/:codigo', validateCodigoParams, buscarProdutoPeloCodigoFactory);
router.post('/produtos', validateCreateProdutoBody, createProdutoFactory);
router.put('/produtos/:codigo', validateUpdateProduto, editarProdutoFactory);
router.delete('/produtos/:codigo', validateCodigoParams, deletarProdutoFactory);

export default router;
