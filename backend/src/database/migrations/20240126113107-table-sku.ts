import { Model, QueryInterface, DataTypes } from 'sequelize';
import { SKU }  from '../../interfaces';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<SKU>>('sku', {
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
    return queryInterface.dropTable('sku');
  },
};


