import { Model, QueryInterface, DataTypes } from 'sequelize';
import { ProductSale }  from '../../interfaces';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ProductSale>>('products-sales', {
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
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('products-sales');
  },
};


