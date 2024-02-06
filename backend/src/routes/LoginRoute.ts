import { Router } from 'express';
import Verify from '../middleware/Verify';

import LoginController from '../controller/LoginController';

const LoginRouter = Router();

LoginRouter.post('/login', LoginController.login);
LoginRouter.post('/login/register', Verify.Address, Verify.Email, Verify.Phone,
  Verify.Password,LoginController.createClient);
LoginRouter.post('/login/adm', LoginController.loginAdm);
LoginRouter.post('/login/adm/register', Verify.IsAdmin, Verify.Name, Verify.Email,
  Verify.Password, Verify.Phone, LoginController.createAdmin);

export default LoginRouter;
