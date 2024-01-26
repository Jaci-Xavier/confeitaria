import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';
import Product from './Product';

class SKU extends Model<InferAttributes<SKU>, InferCreationAttributes<SKU>> {
  declare product_id: number;
  declare quantity: number;
}

SKU.init({
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'sku',
  timestamps: false,
  underscored: true,
});

SKU.belongsTo(Product, { foreignKey: 'product_id' });

export default SKU;