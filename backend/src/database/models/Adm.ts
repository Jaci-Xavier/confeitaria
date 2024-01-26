import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';

class Adm extends Model<InferAttributes<Adm>, InferCreationAttributes<Adm>> {
  declare id: number;
  declare password: string;
  declare email: string;
  declare role: string;
}

Adm.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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