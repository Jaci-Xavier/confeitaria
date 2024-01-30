import { Request, Response } from 'express';

import loginService from '../service/LoginService';

class LoginController {
  static async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const token = await loginService.login(email, password);

    if (token.data.message) return res.status(token.status).json({ message: token.data.message });

    return res.status(token.status).json({ token: token.data.token, message: token.data.message});

  }

  static async createClient(req: Request, res: Response): Promise<Response> {

    const response = await loginService.createClient(req.body);

    return res.status(response.status).json({ message: response.data.message });
  }

  static async createAdmin(req: Request, res: Response): Promise<Response> {

    const response = await loginService.createAdmin(req.body);

    return res.status(response.status).json({ message: response.data.message });
  }

  static async loginAdm(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const token = await loginService.loginAdmin(email, password);

    if (token.data.message) return res.status(token.status).json({ message: token.data.message });

    return res.status(token.status).json({ token: token.data.token });

  }


}

export default LoginController;