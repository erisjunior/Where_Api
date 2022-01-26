const db = require('../models');
const Answer = db.answers;
// const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  Answer.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving answers.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Answer.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving call with id=' + id
      });
    });
};

exports.create = (req, res) => {
  Answer.create(req.body)
    .then(data => {
      res.send({
        message: 'Answer was created successfully!',
        data
      })
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error creating call'
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Answer.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Answer was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update call with id=${id}. Maybe call was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating call with id=' + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Answer.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} answers were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all dogs.'
      });
    });
};

