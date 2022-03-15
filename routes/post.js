import { Router } from 'express';
import { create, read, remove, update, list } from '../controllers/post';
import { checkAuth } from '../middlewares/checkAuth'
const router = Router();

// resful API
router.get('/posts', checkAuth, list);
router.get('/post/:id', checkAuth, read);
router.post('/posts', checkAuth, create);
router.delete('/post/:id', checkAuth, remove);
router.put("/post/:id", checkAuth, update)

export default router;