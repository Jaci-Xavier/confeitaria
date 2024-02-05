import Token from '../utils/Token';
import Client from '../database/models/Client';
import IResponse from '../interfaces/IResponse';
import bcrypt from 'bcryptjs';
import Crypt from '../utils/Crypt';
import Adm from '../database/models/Adm';
import User from '../interfaces/Client';

class LoginService {
  public static async login(email: string, password: string): Promise<IResponse>{

    const client = await Client.findOne({ where: { email } });

    if (!client || !bcrypt.compareSync(password, client.password)) {
      return { status: 401, data: { message: 'Email ou senha inválida!' } };
    }

    const payload = {username: client}
    
    const token = Token.create(payload);

    return { status: 200, data: { token, message: `bem vindo ${client.username}` } };
  }

  public static async createClient(data: User): Promise<IResponse> {
    const client = await Client.findOne({ where: { email: data.email } });

    if (client) {
      return { status: 400, data: { message: 'Email já cadastrado!' } };
    }
    
    const password = await Crypt.encrypt(data.password);
    
    await Client.create({ ...data, password });

    return { status: 201, data: { message: "Cliente cadastrado com sucesso!" } };
  }

  public static async createAdmin(data: any): Promise<IResponse> {
    const client = await Adm.findOne({ where: { email: data.email } });

    if (client) {
      return { status: 400, data: { message: 'Email já cadastrado!' } };
    }
    
    const password = await Crypt.encrypt(data.password);
    
    await Adm.create({ ...data, password });

    return { status: 201, data: { message: "Cliente cadastrado com sucesso!" } };
  }

  public static async loginAdmin(email: string, password: string): Promise<IResponse>{
    const client = await Adm.findOne({ where: { email } });

    if (!client || !bcrypt.compareSync(password, client.password)) {
      return { status: 401, data: { message: 'Email or password incorrect' } };
    }

    const payload = {
      username: client.username,
      role: client.role
    }
    
    const token = Token.create(payload);

    return { status: 200, data: { token } };
  }
}

export default LoginService;