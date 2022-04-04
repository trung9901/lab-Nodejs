import { Router } from "express";
import { list, post, read, remove, update } from "../controllers/post";
import { userById } from "../controllers/user";
import { checkAuth, isAuth, isAdmin, requireSignin } from "../middlewares/checkAuth";
const router = Router();

router.get('/posts', checkAuth, list)
router.get('/posts/:id', checkAuth, read)
router.post('/posts/:userId', requireSignin, isAuth, isAdmin, post)
router.put('/posts/:userId/:id', checkAuth, update)
router.delete('/posts/:userId/:id', checkAuth, remove)
router.param('userId', userById)
export default router;