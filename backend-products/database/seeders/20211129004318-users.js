'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [{
        username: 'Marcos Silva',
        password: 'marcos123',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});

  }
};
