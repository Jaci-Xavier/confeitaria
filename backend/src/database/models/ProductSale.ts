import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';

class ProductSale extends Model<InferAttributes<ProductSale>, InferCreationAttributes<ProductSale>> {
  declare id: number;
  declare product_id: number;
  declare sale_id: number;
  declare quantity: number;
}

ProductSale.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sale_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'product_sales',
  timestamps: false,
  underscored: true,
});

export default ProductSale;