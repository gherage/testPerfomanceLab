'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const productsData = [
      {
        category: 'food',
        title: 'Хлеб',
        desc: 'белый и черный',
        price: 100,
      },
      {
        category: 'food',
        title: 'Молоко',
        desc: 'Свежее, коровье',
        price: 200,
      },
      {
        category: 'food',
        title: 'Творог',
        desc: 'Обезжиренный',
        price: 250,
      },
      {
        category: 'food',
        title: 'Сахар',
        desc: 'Вредно, не покупайте',
        price: 10,
      },
      {
        category: 'clothes',
        title: 'Штаны',
        desc: 'джинсовые',
        price: 2000,
      },
      {
        category: 'clothes',
        title: 'Куртка',
        desc: 'Пуховая, зимняя',
        price: 9000,
      },
      {
        category: 'clothes',
        title: 'Шапка',
        desc: 'черная',
        price: 700,
      },
      {
        category: 'clothes',
        title: 'Кардиган',
        desc: 'Мама миа какой стильный',
        price: 5678,
      },
      {
        category: 'elec',
        title: 'Монитор',
        desc: '240гц',
        price: 25000,
      },
      {
        category: 'elec',
        title: 'Лампа',
        desc: 'Неоновая',
        price: 1000,
      },
      {
        category: 'elec',
        title: 'Видеокарта',
        desc: '4090ti',
        price: 155000,
      },
      {
        category: 'elec',
        title: 'CPU',
        desc: '13900k',
        price: 45000,
      },
    ];
    const products = productsData.map((product) => ({
      ...product,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Products', products);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products');
  },
};
