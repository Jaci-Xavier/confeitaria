import { Model, QueryInterface, DataTypes } from 'sequelize';
import { Adm }  from '../../interfaces/';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Adm>>('adms', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('adms');
  },
};