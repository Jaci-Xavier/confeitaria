import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'brigadeiro',
        price: 89.90,
        description: 'Cem brigadeiros de chocolate',
        image: 'https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLcaOVowHJqk&psig=AOvVaw142Gl7VBaPL3aap_cYLzCM&ust=1706391125309000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODwtcSA_IMDFQAAAAAdAAAAABAD',
      },
      {
        name: 'cajuzinho',
        price: 84.90,
        description: 'Cem cajuzinhos de amendoim',
        image: 'https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FCajuzinho&psig=AOvVaw05C7irCbwWr7Luotw5T_UQ&ust=1706391228403000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjg0--A_IMDFQAAAAAdAAAAABAD',
      },
      {
        name: 'pudim',
        price: 69.90,
        description: 'Pudim de leite condensado',
        image: 'https://www.google.com.br/imgres?imgurl=https%3A%2F%2Fcatracalivre.com.br%2Fwp-content%2Fuploads%2F2020%2F12%2Fpudim-leite-em-po.jpg&tbnid=uR06xWiQaPeCvM&vet=12ahUKEwjcroeUgfyDAxV8T7gEHdioDWwQMygOegUIARCYAQ..i&imgrefurl=https%3A%2F%2Fcatracalivre.com.br%2Freceitas%2Fpudim-de-leite-em-po-pronto-em-20-minutos%2F&docid=buEGax_gcFwGNM&w=900&h=600&itg=1&q=pudim&ved=2ahUKEwjcroeUgfyDAxV8T7gEHdioDWwQMygOegUIARCYAQ',
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
}