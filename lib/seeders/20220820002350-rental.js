'use strict';

module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Rentals', [
      {
        BookId: 1,
        checkoutDate: new Date('2010-07-24'),
        returnDate: new Date('2010-08-01'),
      },
      {
        BookId: 1,
        checkoutDate: new Date('2012-02-07'),
        returnDate: new Date('2012-02-14'),
      },
      {
        BookId: 2,
        checkoutDate: new Date('2019-04-29'),
        returnDate: new Date('2019-06-01'),
      },
      {
        BookId: 2,
        checkoutDate: new Date('2017-11-14'),
        returnDate: new Date('2017-12-03'),
      },
    ]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Returns', null, {});
  },
};
