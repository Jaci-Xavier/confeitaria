import { Model, QueryInterface, DataTypes } from 'sequelize';
import { Sale }  from '../../interfaces';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Sale>>('sales', {
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
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('sales');
  },
};

