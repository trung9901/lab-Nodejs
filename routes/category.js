import { Router } from "express";
import { list, post, read, remove, update } from "../controllers/category";
import { userById } from "../controllers/user";
import { checkAuth, isAuth, isAdmin, requireSignin } from "../middlewares/checkAuth";
const router = Router();

router.get('/categories', list)
router.get('/categories/:id', read)
router.post('/categories/:userId', post)
router.put('/categories/:userId/:id', update)
router.delete('/categories/:userId/:id', remove)
router.param('userId', userById)
export default router;