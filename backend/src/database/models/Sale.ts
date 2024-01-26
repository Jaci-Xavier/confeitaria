import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';
import Client from './Client';

class Sale extends Model<InferAttributes<Sale>, InferCreationAttributes<Sale>> {
  declare id: number;
  declare client_id: number;
  declare value: number;
}

Sale.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  client_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'clients',
      key: 'id',
    },
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'sales',
  timestamps: false,
  underscored: true,
});

Sale.belongsTo(Client, { foreignKey: 'client_id' });

export default Sale;