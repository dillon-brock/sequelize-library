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
      },
      {
        title: 'The Graveyard Book',
        releaseYear: 2008,
        pages: 312,
      },
      {
        title: 'Crying in H Mart',
        releaseYear: 2021,
        pages: 256,
      },
      {
        title: 'Educated',
        releaseYear: 2018,
        pages: 352,
      },
      {
        title: 'Kindred',
        releaseYear: 1979,
        pages: 264,
      },
      {
        title: 'Parable of the Sower',
        releaseYear: 1993,
        pages: 299,
      },
      {
        title: 'Xenogenesis',
        releaseYear: 1987,
        pages: 256,
      },
      {
        title: 'It Chooses You',
        releaseYear: 2011,
        pages: 218,
      },
      {
        title: 'The First Bad Man',
        releaseYear: 2015,
        pages: 304,
      },
      {
        title: 'The Thing Around Your Neck',
        releaseYear: 2009,
        pages: 300,
      },
      {
        title: 'The Goldfinch',
        releaseYear: 2013,
        pages: 771,
      },
      {
        title: 'All The Light We Cannot See',
        releaseYear: 2014,
        pages: 531,
      },
      {
        title: 'About Grace',
        releaseYear: 2004,
        pages: 432,
      },
      {
        title: 'The Book Thief',
        releaseYear: 2005,
        pages: 584,
      },
      {
        title: 'We Should All Be Feminists',
        releaseYear: 2014,
        pages: 64,
      },
      {
        title: 'The Little Book of Black Holes',
        releaseYear: 2017,
        pages: 200,
      },
      {
        title: 'The Bully Pulpit',
        releaseYear: 2013,
        pages: 928,
      },
      {
        // eslint-disable-next-line quotes
        title: "Electrical Engineers' HandBook",
        releaseYear: 1914,
        pages: 1028,
      },
      {
        title: 'The Bell Jar',
        releaseYear: 1963,
        pages: 244,
      },
      {
        title: 'Momofuku',
        releaseYear: 2009,
        pages: 304,
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
