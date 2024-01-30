import { Router } from 'express';
import Verify from '../middleware/Verify';

import LoginController from '../controller/LoginController';

const LoginRouter = Router();

LoginRouter.post('/login', LoginController.login);
LoginRouter.post('/login/register', Verify.Address,LoginController.createClient);
LoginRouter.post('/login/adm/register', LoginController.createAdmin);

export default LoginRouter;