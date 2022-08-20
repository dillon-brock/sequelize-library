const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const rentals = await db.Rental.findAll({
        attributes: ['id', 'checkoutDate', 'returnDate'],
        include: {
          model: db.Book,
          attributes: ['title', 'id'],
          include: {
            model: db.Author,
            attributes: ['firstName', 'lastName'],
            through: {
              attributes: [],
            },
          },
        },
      });
      res.json(rentals);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const rental = await db.Rental.findByPk(req.params.id, {
        attributes: ['id', 'checkoutDate', 'returnDate'],
        include: {
          model: db.Book,
          attributes: ['id', 'title', 'releaseYear', 'pages'],
          include: [
            {
              model: db.Author,
              attributes: ['id', 'firstName', 'lastName'],
              through: {
                attributes: [],
              },
            },
            {
              model: db.Category,
              attributes: ['name'],
            },
          ],
        },
      });
      res.json(rental);
    } catch (e) {
      next(e);
    }
  });
