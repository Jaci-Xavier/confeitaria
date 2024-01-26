import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';

class Sale extends Model<InferAttributes<Sale>, InferCreationAttributes<Sale>> {
  declare id: number;
  declare user_id: number;
  declare value: number;
}

Sale.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

export default Sale;