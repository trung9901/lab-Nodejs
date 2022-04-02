import { Router } from 'express';
import { create, read, remove, update, list } from '../controllers/product';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth'
const router = Router();

// resful API
router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, read);
router.post('/products/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/products/:id', checkAuth, remove);
router.put("/products/:id", checkAuth, update)
router.param("userId", userById);
export default router;