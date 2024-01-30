import Token from '../utils/Token';
import Client from '../database/models/Client';
import IResponse from '../interfaces/IResponse';
import bcrypt from 'bcryptjs';
import Crypt from '../utils/Crypt';
import Adm from '../database/models/Adm';

class LoginService {
  public static async login(email: string, password: string): Promise<IResponse>{
    const client = await Client.findOne({ where: { email } });

    if (!client || !bcrypt.compareSync(password, client.password)) {
      return { status: 401, data: { message: 'Email ou senha inválida!' } };
    }
    
    const token = Token.create(client.email);

    return { status: 200, data: { token, message: `bem vindo ${client.username}` } };
  }

  public static async createClient(data: any): Promise<IResponse> {
    
    const password = await Crypt.encrypt(data.password);
    
    await Client.create({ ...data, password });

    return { status: 201, data: { message: "Cliente cadastrado com sucesso!" } };
  }

  public static async createAdmin(data: any): Promise<IResponse> {
    
    const password = await Crypt.encrypt(data.password);
    
    await Adm.create({ ...data, password });

    return { status: 201, data: { message: "Cliente cadastrado com sucesso!" } };
  }

  public static async loginAdmin(email: string, password: string): Promise<IResponse>{
    const client = await Adm.findOne({ where: { email } });

    if (!client || !bcrypt.compareSync(password, client.password)) {
      return { status: 401, data: { message: 'Email or password incorrect' } };
    }
    
    const token = Token.create(client.email);

    return { status: 200, data: { token } };
  }
}

export default LoginService;