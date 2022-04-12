import { Router } from "express";
import { list, post, read, remove, update } from "../controllers/post";
import { userById } from "../controllers/user";
import { checkAuth, isAuth, isAdmin, requireSignin } from "../middlewares/checkAuth";
const router = Router();

router.get('/posts', list)
router.get('/posts/:id', read)
router.post('/posts/:userId', requireSignin, isAuth, isAdmin, post)
router.put('/posts/:userId/:id', requireSignin, isAuth, isAdmin, update)
router.delete('/posts/:userId/:id', requireSignin, isAuth, isAdmin, remove)
router.param('userId', userById)
export default router;