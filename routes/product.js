import { Router } from 'express';
import { create, read, remove, update, list } from '../controllers/product';
import { checkAuth } from '../middlewares/checkAuth'
const router = Router();

// resful API
router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, read);
router.post('/products', checkAuth, create);
router.delete('/product/:id', checkAuth, remove);
router.put("/product/:id", checkAuth, update)

export default router;