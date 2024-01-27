import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('sales', [
      {
        client_id: 1,
        value: 100,
      },
      {
        client_id: 2,
        value: 90,
      },
      {
        client_id: 3,
        value: 70,
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('sales', {});
  },
}