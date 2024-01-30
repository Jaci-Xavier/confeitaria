import * as bcrypt from 'bcryptjs';

class Crypt {
  public static async encrypt(password: string): Promise<string> {
    const hash = bcrypt.hashSync(password, 10);
    return hash;
  }
}

export default Crypt;