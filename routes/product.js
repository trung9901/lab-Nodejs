import { Router } from 'express';
import { create, read, remove, update, list } from '../controllers/product';
import { checkAuth } from '../middlewares/checkAuth'
import { userById } from '../controllers/user';
const router = Router();

// resful API
router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, read);
router.post('/products', create);
router.delete('/products/:id', checkAuth, remove);
router.put("/products/:id", checkAuth, update)
router.param("userId", userById);
export default router;