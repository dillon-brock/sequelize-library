const { Router } = require('express');
const db = require('../models');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const categories = await db.Category.findAll();
    res.json(categories);
  } catch (e) {
    next(e);
  }
});
