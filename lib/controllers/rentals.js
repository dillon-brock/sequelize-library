const { Router } = require('express');
const db = require('../models');

module.exports = Router().get('/', async (req, res, next) => {
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
});
