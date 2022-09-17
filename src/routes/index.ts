import { Router } from "express";
import produtosRoutes from './produtos.routes';

const router = Router();

router.use(produtosRoutes)

export default router;
