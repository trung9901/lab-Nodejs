import { Router } from 'express';
import { create, read, remove, update, list } from '../controllers/product';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth'
const router = Router();

// resful API
router.get('/products', list);
router.get('/products/:id', read);
router.post('/products/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/products/:userId/:id', requireSignin, isAuth, isAdmin, remove);
router.put("/products/:userId/:id", requireSignin, isAuth, isAdmin, update)
router.param("userId", userById);
export default router;