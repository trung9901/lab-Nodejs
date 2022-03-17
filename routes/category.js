import { Router } from 'express';
import { create, read, remove, update, list } from '../controllers/category';
import { checkAuth } from '../middlewares/checkAuth'
const router = Router();

// resful API
// router.get('/categories', checkAuth, list);
router.post("/category", create);
router.get("/category/:id", read);
// router.delete('/category/:id', checkAuth, remove);
// router.put("/category/:id", checkAuth, update)

export default router;