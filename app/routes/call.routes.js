module.exports = app => {
  const calls = require('../controllers/call.controller.js');

  const router = require('express').Router();

  router.get('/', calls.findAll);

  router.get('/:id', calls.findOne);

  router.post('/', calls.create);

  router.put('/:id', calls.update);

  router.delete('/', calls.deleteAll);

  app.use('/calls', router);
};
