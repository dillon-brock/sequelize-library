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
  .get('/:id', async (req, res, next) => {
    try {
      const book = await db.Book.findByPk(req.params.id, {
        include: {
          model: db.Author,
          through: {
            attributes: [],
          },
        },
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
