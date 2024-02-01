import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import db from '.';
import { v4 as uuidv4 } from 'uuid';

class Client extends Model<InferAttributes<Client>, InferCreationAttributes<Client>> {
  declare id: CreationOptional<string>;
  declare username: string;
  declare password: CreationOptional<string>;
  declare email: string;
  declare phone: string;
  declare address: string;
}

Client.init({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: uuidv4(),
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'clients',
  timestamps: false,
  underscored: true,
});

export default Client;