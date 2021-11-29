'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [{
        name: 'Caneta',
        price: 2.0,
        discPrice: 2,
        qttInventory: 30,
        cateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lapis',
        price: 0.5,
        discPrice: 10,
        qttInventory: 20,
        cateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('products', null, {});
     
  }
};
