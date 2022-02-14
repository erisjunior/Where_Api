const db = require('../models');
const Call = db.calls;
const Answer = db.answers;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  const user_name = req.query.user_name || '';
  const user_city = req.query.user_city || '';
  const user_state = req.query.user_state || '';

  Call.findAll({
    include: [{
      model: Answer,
      as: 'answers',
    }],
    where: {
      user_name: {
        [Op.iLike]: `%${user_name}%`
      },
      user_city: {
        [Op.iLike]: `%${user_city}%`
      },
      user_state: {
        [Op.iLike]: `%${user_state}%`
      },
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving calls.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Call.findByPk(id)
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
  Call.create(req.body)
    .then(data => {
      res.send({
        message: 'Call was created successfully!',
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

  Call.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Call was updated successfully.'
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
  Call.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} calls were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all dogs.'
      });
    });
};

