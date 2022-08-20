const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const categories = await db.Category.findAll();
      res.json(categories);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const category = await db.Category.findByPk(req.params.id, {
        include: {
          model: db.Book,
          attributes: ['id', 'title', 'releaseYear', 'pages'],
          include: {
            model: db.Author,
            through: {
              attributes: [],
            },
            attributes: ['firstName', 'lastName'],
          },
        },
      });
      res.json(category);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const newCategory = await db.Category.create(req.body);
      res.json(newCategory);
    } catch (e) {
      next(e);
    }
  });
