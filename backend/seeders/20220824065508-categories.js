'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('Categories', [
    {
      name: 'Прогнозы в IT',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name: "Веб-разработка",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name: "Мобильная разработка",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name: "Фриланс",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name: "Алгоритмы",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name: "Тестирование IT систем",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name: "Разработка игр",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name: "Дизайн и юзабилити",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name: "Искуственный интелект",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name: "Машинное обучение",
      createdAt:new Date(),
      updatedAt:new Date()
    },
  ], {})

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
