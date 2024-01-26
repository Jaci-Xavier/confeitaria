import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('adms', [
      { 
        email: 'karine@teste.com',
        password: '$2a$10$SD8QYF7YPG5mPfRPfbn4q.PnjO00iQ2JozDGAqueX2EFcQAUUyuNG',
        role: 'admin',
        // senha: confeitariaka
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('adms', {});
  },
}