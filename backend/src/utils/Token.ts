import * as jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import IResponse from '../interfaces/IResponse';

const secret = process.env.JWT_SECRET || 'confeitaria';

class Token {
  public static create(user: object): string {
    return jwt.sign(user, secret);
  }

  public static authenticate(token: string): IResponse {
    const decoded = jwt.verify(token, secret) as IUser;
    if (decoded.role !== 'admin') {
      return { status: 403, data: { message: 'Acesso negado. Você não é um administrador.' } };
    }
    return { status: 200, data: { message: 'Acesso permitido' } };
  }
}

export default Token;
