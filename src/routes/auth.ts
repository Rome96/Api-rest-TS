import { Router } from 'express';
import { loginController, RegisterController } from '../controllers/auth';

const router = Router();

// http://localhost:3002/auth/login [POST]
router.post('/login', loginController);
router.post('/register', RegisterController);


 
export {router}