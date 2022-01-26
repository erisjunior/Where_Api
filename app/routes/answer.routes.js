module.exports = app => {
  const answers = require('../controllers/answer.controller.js');

  const router = require('express').Router();

  router.get('/', answers.findAll);

  router.get('/:id', answers.findOne);

  router.post('/', answers.create);

  router.put('/:id', answers.update);

  router.delete('/', answers.deleteAll);

  app.use('/answers', router);
};
