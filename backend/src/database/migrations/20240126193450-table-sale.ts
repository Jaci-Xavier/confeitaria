import { Model, QueryInterface, DataTypes } from 'sequelize';
import { Sale }  from '../../interfaces';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Sale>>('sales', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('sales');
  },
};

