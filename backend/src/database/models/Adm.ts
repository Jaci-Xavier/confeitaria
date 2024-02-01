import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import db from '.';

class Adm extends Model<InferAttributes<Adm>, InferCreationAttributes<Adm>> {
  declare id: CreationOptional<string>;
  declare username: string;
  declare password: CreationOptional<string>;
  declare email: string;
  declare phone: string;
  declare role: string;
}

Adm.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'adms',
  timestamps: false,
  underscored: true,
});

export default Adm;