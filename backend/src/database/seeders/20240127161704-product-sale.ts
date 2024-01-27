import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('products-sales', [
      {
        sale_id: 1,
        client_id: 1,
        product_id: 1,
        quantity: 1,
      },
      {
        sale_id: 2,
        client_id: 2,
        product_id: 2,
        quantity: 1,
      },
      {
        sale_id: 3,
        client_id: 3,
        product_id: 3,
        quantity: 1,
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products-sales', {});
  },
}