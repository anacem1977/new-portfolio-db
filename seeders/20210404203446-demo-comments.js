'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Comments', [
       {
         name: "Ana",
         email: "anace_m@hotmail.com",
         comments: "Excelent!"
    },
  ], 
{}
);
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
