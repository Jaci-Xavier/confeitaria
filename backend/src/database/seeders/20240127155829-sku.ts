import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('sku', [
      {
        product_id: 1,
        quantity: 10,
      },
      {
        product_id: 2,
        quantity: 10,
      },
      {
        product_id: 3,
        quantity: 5,
      },
      {
        product_id: 4,
        quantity: 5,
      },
      {
        product_id: 5,
        quantity: 20,
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('sku', {});
  },
}