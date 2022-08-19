const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');
describe('backend-express-template routes', () => {
  beforeEach(async () => {
    try {
      await db.Book.bulkCreate([
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
      await db.Author.bulkCreate([
        {
          firstName: 'Neil',
          lastName: 'Gaiman',
          dob: new Date('1960-11-10'),
          pob: 'Portchester, UK',
        },
        {
          firstName: 'Michelle',
          lastName: 'Zauner',
          dob: new Date('1989-03-29'),
          pob: 'Seoul, South Korea',
        },
        {
          firstName: 'Tara',
          lastName: 'Westover',
          dob: new Date('1989-09-27'),
          pob: 'Clifton Idaho',
        },
        {
          firstName: 'Octavia E.',
          lastName: 'Butler',
          dob: new Date('1947-06-22'),
          pob: 'Pasadena, CA',
        },
        {
          firstName: 'Miranda',
          lastName: 'July',
          dob: new Date('1974-02-15'),
          pob: 'Barre, VT',
        },
        {
          firstName: 'Chimamanda Ngozi',
          lastName: 'Adichie',
          dob: new Date('1977-09-15'),
          pob: 'Enugu, Nigeria',
        },
        {
          firstName: 'Donna',
          lastName: 'Tartt',
          dob: new Date('1963-12-23'),
          pob: 'Greenwood, MS',
        },
        {
          firstName: 'Anthony',
          lastName: 'Doerr',
          dob: new Date('1973-10-27'),
          pob: 'Cleveland, OH',
        },
        {
          firstName: 'Markus',
          lastName: 'Zusak',
          dob: new Date('1975-06-23'),
          pob: 'Sydney, Australia',
        },
        {
          firstName: 'Frans',
          lastName: 'Pretorious',
          dob: new Date('1973-07-31'),
          pob: 'Johannesburg, South Africa',
        },
        {
          firstName: 'Steven',
          lastName: 'Gubser',
          dob: new Date('1972-05-04'),
          pob: 'Tulsa, OK',
        },
        {
          firstName: 'Doris',
          lastName: 'Kearns Goodwin',
          dob: new Date('1943-01-04'),
          pob: 'New York City, NY',
        },
        {
          firstName: 'Harold',
          lastName: 'Pender',
          dob: new Date('1879-01-13'),
          pob: 'Tarboro, NC',
        },
        {
          firstName: 'Knox',
          lastName: 'McIlwain',
          dob: null,
          pob: null,
        },
        {
          firstName: 'Sylvia',
          lastName: 'Plath',
          dob: new Date('1932-10-27'),
          pob: 'Boston, MA',
        },
        {
          firstName: 'David',
          lastName: 'Chang',
          dob: new Date('1977-08-05'),
          pob: 'Arlington County, VA',
        },
        {
          firstName: 'Peter',
          lastName: 'Meehan',
          dob: null,
          pob: null,
        },
      ]);
      await db.BookAuthor.bulkCreate([
        {
          BookId: 1,
          AuthorId: 1,
        },
        {
          BookId: 2,
          AuthorId: 1,
        },
        {
          BookId: 3,
          AuthorId: 2,
        },
        {
          BookId: 4,
          AuthorId: 3,
        },
        {
          BookId: 5,
          AuthorId: 4,
        },
        {
          BookId: 6,
          AuthorId: 4,
        },
        {
          BookId: 7,
          AuthorId: 4,
        },
        {
          BookId: 8,
          AuthorId: 5,
        },
        {
          BookId: 9,
          AuthorId: 5,
        },
        {
          BookId: 10,
          AuthorId: 6,
        },
        {
          BookId: 11,
          AuthorId: 7,
        },
        {
          BookId: 12,
          AuthorId: 8,
        },
        {
          BookId: 13,
          AuthorId: 8,
        },
        {
          BookId: 14,
          AuthorId: 9,
        },
        {
          BookId: 15,
          AuthorId: 6,
        },
        {
          BookId: 16,
          AuthorId: 10,
        },
        {
          BookId: 16,
          AuthorId: 11,
        },
        {
          BookId: 17,
          AuthorId: 12,
        },
        {
          BookId: 18,
          AuthorId: 13,
        },
        {
          BookId: 18,
          AuthorId: 14,
        },
        {
          BookId: 19,
          AuthorId: 15,
        },
        {
          BookId: 20,
          AuthorId: 16,
        },
        {
          BookId: 20,
          AuthorId: 17,
        },
      ]);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });
  it('#GET /api/v1/books should get a list of books', async () => {
    const res = await request(app).get('/api/v1/books');
    expect(res.status).toBe(200);
    expect(res.body[0]).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      releaseYear: expect.any(Number),
      pages: expect.any(Number),
    });
  });
  it('#GET /api/v1/books/:id should get a book with id from params with nested author info', async () => {
    const res = await request(app).get('/api/v1/books/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      title: 'American Gods',
      releaseYear: 2001,
      pages: 465,
      Authors: expect.any(Array),
    });
  });
  it('#GET /api/v1/authors should get a list of authors', async () => {
    const res = await request(app).get('/api/v1/authors');
    expect(res.status).toBe(200);
    expect(res.body[0]).toEqual({
      id: expect.any(Number),
      firstName: expect.any(String),
      lastName: expect.any(String),
      dob: expect.any(String),
      pob: expect.any(String),
    });
  });
  it('#GET /api/v1/authors/:id should get an author with id from params and nested books array', async () => {
    const res = await request(app).get('/api/v1/authors/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: 1,
      firstName: 'Neil',
      lastName: 'Gaiman',
      dob: expect.any(String),
      pob: 'Portchester, UK',
      Books: expect.any(Array),
    });
    expect(res.body.Books.length).toEqual(2);
  });
  it('#POST /api/v1/books should add a new book without author association', async () => {
    const newBook = {
      title: 'Detransition, Baby',
      releaseYear: 2021,
      pages: 337,
    };
    const res = await request(app).post('/api/v1/books').send(newBook);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(Number),
      ...newBook,
    });
  });
  it('#POST /api/v1/authors/:id/books should add a new book associated with author with id from params', async () => {
    const newBook = {
      title: 'Stardust',
      releaseYear: 1997,
      pages: 256,
    };
    const originalAuthorResp = await request(app).get('/api/v1/authors/1');
    const originalBookLength = originalAuthorResp.body.Books.length;
    const res = await request(app)
      .post('/api/v1/authors/1/books')
      .send(newBook);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(Number),
      ...newBook,
    });
    const authorResp = await request(app).get('/api/v1/authors/1');
    expect(authorResp.body.Books.length).toEqual(originalBookLength + 1);
  });
});
