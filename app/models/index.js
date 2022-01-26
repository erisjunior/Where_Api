const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:123@localhost:5432/wheredb', {
  ssl: true,
  dialectOptions: {
    // encrypt: true,
    // ssl: {
    //   rejectUnauthorized: false
    // }
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.answers = require('./answer.model.js')(sequelize, Sequelize);
db.calls = require('./call.model.js')(sequelize, Sequelize, db.answers);

module.exports = db;
