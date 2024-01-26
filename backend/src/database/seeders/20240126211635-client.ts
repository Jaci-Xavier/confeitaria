import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('clients', [
      { 
        username: 'Clecin',
        password: '$2a$10$KKTe2JRFeOXgxY5TnnUmAOyIgVWdi3mSi546ml04M98u6lUq21XkK',
        email: 'clecio@teste.com',
        phone: '(21) 99999-9999',
        address: 'Rua das Flores, 123',
        // senha: boladonervoso
      },
      {
        username: 'Ruanzera',
        password: '$2a$10$OAZNV1exTxWaPUp0Ma5OXendi4PJFv3XGT9tsYpUu3UU7f3ZPmhvi',
        email: 'ruan@teste.com',
        phone: '(21) 99999-8888',
        address: 'Rua das Flores, 456',
        // senha: brabodatrybe
      },
      {
        username: 'Pedrão',
        password: '$2a$10$GBvCk070JFWGn7tVNyal9OKuhUlx.Hvp8K7sZa5BrXY4aaO/l4vEe',
        email: 'pedro@teste.com',
        phone: '(21) 99999-7777',
        address: 'Rua das Flores, 789',
        // senha: eusoualenda
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('clients', {});
  },
}