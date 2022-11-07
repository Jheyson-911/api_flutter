import { register, login, getUsers } from '../controllers/auth.controller.js';
import { Router } from 'express';
import { verifyToken } from '../middlewares/jwtVerify.middleware.js';

const router = new Router();

router.get('/all', verifyToken, getUsers);
router.post('/register', register);
router.post('/login', login);

export default router;
