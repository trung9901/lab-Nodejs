import { Router } from "express";
import { list, post, read, remove, update } from "../controllers/category";
import { userById } from "../controllers/user";
import { checkAuth, isAuth, isAdmin, requireSignin } from "../middlewares/checkAuth";
const router = Router();

router.get('/categories', isAuth, list)
router.get('/categories/:id', isAuth, read)
router.post('/categories/:userId', requireSignin, isAuth, isAdmin, post)
router.put('/categories/:userId/:id', requireSignin, isAuth, isAdmin, update)
router.delete('/categories/:userId/:id', requireSignin, isAuth, isAdmin, remove)
router.param('userId', userById)
export default router;