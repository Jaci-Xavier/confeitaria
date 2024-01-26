import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';
import Product from './Product';
import Client from './Client';
import Sale from './Sale';

class ProductSale extends Model<InferAttributes<ProductSale>, InferCreationAttributes<ProductSale>> {
  declare sale_id: number;
  declare client_id: number;
  declare product_id: number;
  declare quantity: number;
}

ProductSale.init({
  sale_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'sales',
      key: 'id',
    },
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'clients',
      key: 'id',
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      key: 'id',
    },
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

ProductSale.belongsTo(Product, { foreignKey: 'product_id' });
ProductSale.belongsTo(Client, { foreignKey: 'client_id' });
ProductSale.belongsTo(Sale, { foreignKey: 'sale_id' });

export default ProductSale;