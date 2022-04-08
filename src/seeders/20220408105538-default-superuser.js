'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


   return queryInterface.bulkInsert('Users', [{
       id: 1,
        userId: 123,
        name: 'Endurance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        userId: 124,
        name: 'Endurance',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return queryInterface.bulkDelete('superuser', { userId: 124 }, {});

  }
};
