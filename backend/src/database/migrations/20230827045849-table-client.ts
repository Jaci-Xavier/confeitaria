import { Model, QueryInterface, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { Client }  from '../../interfaces/';


export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Client>>('clients', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: uuidv4(),
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('clients');
  },
};