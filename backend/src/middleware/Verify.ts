import { Request, Response, NextFunction } from 'express';

export default class Verify {
  static async Name(req: Request, res: Response, next: NextFunction) {
    const { userName } = req.body;

    if (!userName) return res.status(400).json({ message: 'Name is required' });

    if (userName.length < 3) return res.status(400).json({ message: 'Name must be at least 3 characters' });

    next();
  }
  
  static async Password(req: Request, res: Response, next: NextFunction) {
    const { password } = req.body;

    if (!password) return res.status(400).json({ message: 'Password is required' });

    if (password.length < 8) return res.status(400).json({ message: 'Password must be at least 8 characters' });

    next();
  }

  static async Email(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: 'Email is required' });

    next();
  }

  static async Phone(req: Request, res: Response, next: NextFunction) {
    const { phone } = req.body;

    if (phone.length < 11) return res.status(400).json({ message: 'O numero de telefone precisa ter 11 caracteres' });

    if (!phone) return res.status(400).json({ message: 'Numero de telefone requerido' });

    next();
  }

  static async Address(req: Request, res: Response, next: NextFunction) {
    const { address } = req.body;

    if (!address) return res.status(400).json({ message: 'Address is required' });

    if (address.length < 10) return res.status(400).json({ message: 'Address must be at least 10 characters' });

    next();
  }
}