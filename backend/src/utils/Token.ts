import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'confeitaria';

class Token {
  public static create(user: object): string {
    return jwt.sign(user, secret);
  }

  public static authenticate(token: string): object | string {
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      return 'Token ausente ou inválido';
    }
  }
}

export default Token;