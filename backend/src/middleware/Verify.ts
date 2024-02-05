import { Request, Response, NextFunction } from 'express';
import Token from '../utils/Token';

export default class Verify {
  static async Name(req: Request, res: Response, next: NextFunction) {
    const { userName } = req.body;

    if (!userName) return res.status(400).json({ message: 'É necessário cadastrar um nome para o cliente!' });

    if (userName.length < 3) return res.status(400).json({ message: 'O nome precisa ter mais que 3 caracteres' });

    next();
  }
  
  static async Password(req: Request, res: Response, next: NextFunction) {
    const { password } = req.body;

    if (!password) return res.status(400).json({ message: 'É necessário cadastrar uma senha!' });

    if (password.length < 8) return res.status(400).json({ message: 'A senha precisa ter mais que 8 caracteres' });

    next();
  }

  static async Email(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: 'É necessário cadastrar um email!' });

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

    if (!address) return res.status(400).json({ message: 'É necessário cadastrar o endereço' });

    if (address.length < 10) return res.status(400).json({ message: 'Endereço inválido' });

    next();
  }

  static async Image(req: Request, res: Response, next: NextFunction) {
    const { image } = req.body;

    if (!image) return res.status(400).json({ message: 'É necessário cadastrar uma imagem' });

    next();
  }

  static async Description(req: Request, res: Response, next: NextFunction) {
    const { description } = req.body;

    if (!description) return res.status(400).json({ message: 'É necessario cadastrar a descrição do produto' });

    if (description.length < 10) return res.status(400).json({ message: 'A descrição precisa conter mais que 10 caracteres' });

    next();
  }

  static async Price(req: Request, res: Response, next: NextFunction) {
    const { price } = req.body;

    if (!price) return res.status(400).json({ message: 'É necessário cadastrar o preço' });

    if (price <= 0) return res.status(400).json({ message: 'O preço não pode ser 0' });

    next();
  }

  static async Quantity(req: Request, res: Response, next: NextFunction) {
    const { quantity } = req.body;

    if (!quantity) return res.status(400).json({ message: 'É necessário cadastrar a quantidade' });

    if (quantity <= 0) return res.status(400).json({ message: 'A quantidade nao pode ser 0' });

    next();
  }

  static async AuthAdmin(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token não encontrado' });

    const response = Token.authenticate(token);

    if (response.status !== 200) return res.status(response.status).json(response.data);

    next();
  }

  static async IsAdmin(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token não encontrado' });

    const response = Token.authenticate(token);

    if (response.status !== 200) return res.status(response.status).json(response.data);

    next();
  }
}