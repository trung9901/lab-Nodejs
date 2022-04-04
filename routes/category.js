import { Router } from "express";
import { list, post, read, remove, update } from "../controllers/category";
import { userById } from "../controllers/user";
import { checkAuth, isAuth, isAdmin, requireSignin } from "../middlewares/checkAuth";
const router = Router();

router.get('/categories', checkAuth, list)
router.get('/categories/:id', checkAuth, read)
router.post('/categories/:userId', requireSignin, isAuth, isAdmin, post)
router.put('/categories/:userId/:id', checkAuth, update)
router.delete('/categories/:userId/:id', checkAuth, remove)
router.param('userId', userById)
export default router;