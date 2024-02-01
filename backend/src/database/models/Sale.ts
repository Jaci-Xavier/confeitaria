import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import db from '.';
import { v4 as uuidv4 } from 'uuid';
import Client from './Client';

class Sale extends Model<InferAttributes<Sale>, InferCreationAttributes<Sale>> {
  declare id: CreationOptional<string>;
  declare client_id: string;
  declare value: number;
}

Sale.init({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: uuidv4(),
  },
  client_id:{
    type: DataTypes.UUID,
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