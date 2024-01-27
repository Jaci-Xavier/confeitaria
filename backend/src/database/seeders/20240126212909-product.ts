import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Brigadeiro',
        price: 100,
        description: 'Cem brigadeiros de chocolate',
        image: 'https://www.confeiteiradesucesso.com/wp-content/uploads/2018/06/brigadeirogourmet-belga.jpg',
      },
      {
        name: 'Cajuzinho',
        price: 90,
        description: 'Cem cajuzinhos de amendoim',
        image: 'https://pt.wikipedia.org/wiki/Cajuzinho#/media/Ficheiro:Cajuzinho.jpg',
      },
      {
        name: 'Pudim',
        price: 70,
        description: 'Pudim de leite condensado',
        image: 'https://catracalivre.com.br/wp-content/uploads/2020/12/pudim-leite-em-po.jpg',
      },
      {
        name: 'Bolo de aniversário',
        price: 200,
        description: 'Bolo de aniversário confeitado de 25 fatias',
        image: 'https://i.pinimg.com/736x/8f/04/77/8f0477ab919b630b829bddafb0e0c8ee.jpg',
      },
      {
        name: 'Torta salgada',
        price: 100,
        description: 'Torta salgada agridoce de frango com ameixa',
        image: 'https://i.pinimg.com/736x/8f/04/77/8f0477ab919b630b829bddafb0e0c8ee.jpg'
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
}