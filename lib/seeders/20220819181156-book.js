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
    await queryInterface.bulkInsert('Books', [
      {
        title: 'American Gods',
        releaseYear: 2001,
        pages: 465,
        CategoryId: 9,
      },
      {
        title: 'The Graveyard Book',
        releaseYear: 2008,
        pages: 312,
        CategoryId: 9,
      },
      {
        title: 'Crying in H Mart',
        releaseYear: 2021,
        pages: 256,
        CategoryId: 5,
      },
      {
        title: 'Educated',
        releaseYear: 2018,
        pages: 352,
        CategoryId: 5,
      },
      {
        title: 'Kindred',
        releaseYear: 1979,
        pages: 264,
        CategoryId: 9,
      },
      {
        title: 'Parable of the Sower',
        releaseYear: 1993,
        pages: 299,
        CategoryId: 8,
      },
      {
        title: 'Xenogenesis',
        releaseYear: 1987,
        pages: 256,
        CategoryId: 8,
      },
      {
        title: 'It Chooses You',
        releaseYear: 2011,
        pages: 218,
        CategoryId: 3,
      },
      {
        title: 'The First Bad Man',
        releaseYear: 2015,
        pages: 304,
        CategoryId: 1,
      },
      {
        title: 'The Thing Around Your Neck',
        releaseYear: 2009,
        pages: 300,
        CategoryId: 7,
      },
      {
        title: 'The Goldfinch',
        releaseYear: 2013,
        pages: 771,
        CategoryId: 1,
      },
      {
        title: 'All The Light We Cannot See',
        releaseYear: 2014,
        pages: 531,
        CategoryId: 2,
      },
      {
        title: 'About Grace',
        releaseYear: 2004,
        pages: 432,
        CategoryId: 1,
      },
      {
        title: 'The Book Thief',
        releaseYear: 2005,
        pages: 584,
        CategoryId: 2,
      },
      {
        title: 'We Should All Be Feminists',
        releaseYear: 2014,
        pages: 64,
        CategoryId: 3,
      },
      {
        title: 'The Little Book of Black Holes',
        releaseYear: 2017,
        pages: 200,
        CategoryId: 3,
      },
      {
        title: 'The Bully Pulpit',
        releaseYear: 2013,
        pages: 928,
        CategoryId: 4,
      },
      {
        // eslint-disable-next-line quotes
        title: "Electrical Engineers' HandBook",
        releaseYear: 1914,
        pages: 1028,
        CategoryId: 11,
      },
      {
        title: 'The Bell Jar',
        releaseYear: 1963,
        pages: 244,
        CategoryId: 6,
      },
      {
        title: 'Momofuku',
        releaseYear: 2009,
        pages: 304,
        CategoryId: 10,
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
    await queryInterface.bulkDelete('Books', null, {});
  },
};
