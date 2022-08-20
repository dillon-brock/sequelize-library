const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const books = await db.Book.findAll();
      res.json(books);
    } catch (e) {
      next(e);
    }
  })
  .get('/checked-out', async (req, res, next) => {
    try {
      const books = await db.Book.findAll({
        attributes: ['id', 'title'],
        include: [
          {
            model: db.Author,
            through: {
              attributes: [],
            },
            attributes: ['firstName', 'lastName'],
          },
          {
            model: db.Rental,
            where: {
              returnDate: null,
            },
            attributes: [],
          },
        ],
      });
      res.json(books);
    } catch (e) {
      next(e);
    }
  })
  .get('/available', async (req, res, next) => {
    try {
      const checkedOutBooks = await db.Book.findAll({
        attributes: ['id', 'title'],
        include: [
          {
            model: db.Author,
            through: {
              attributes: [],
            },
            attributes: ['firstName', 'lastName'],
          },
          {
            model: db.Rental,
            where: {
              returnDate: null,
            },
            attributes: [],
          },
        ],
      });
      const books = await db.Book.findAll({
        attributes: ['id', 'title'],
        include: [
          {
            model: db.Author,
            through: {
              attributes: [],
            },
            attributes: ['firstName', 'lastName'],
          },
        ],
      });
      const jsonBooks = books.map((book) => JSON.stringify(book));
      checkedOutBooks.forEach((book) => {
        jsonBooks.splice(jsonBooks.indexOf(JSON.stringify(book)), 1);
      });
      const respBooks = jsonBooks.map((book) => JSON.parse(book));
      res.json(respBooks);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const book = await db.Book.findByPk(req.params.id, {
        include: [
          {
            model: db.Author,
            through: {
              attributes: [],
            },
          },
          {
            model: db.Category,
            attributes: ['name'],
          },
        ],
      });
      res.json(book);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const newBook = await db.Book.create(req.body);
      res.json(newBook);
    } catch (e) {
      next(e);
    }
  })
  .post('/:id/authors', async (req, res, next) => {
    try {
      const newAuthor = await db.Author.create(req.body);
      await db.BookAuthor.create({
        BookId: req.params.id,
        AuthorId: newAuthor.id,
      });
      res.json(newAuthor);
    } catch (e) {
      next(e);
    }
  });
