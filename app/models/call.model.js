module.exports = (sequelize, Sequelize, Answer) => {
  const Call = sequelize.define('call', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    quantity: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    user_name: {
      type: Sequelize.STRING
    },
    user_city: {
      type: Sequelize.STRING
    },
    user_state: {
      type: Sequelize.STRING
    },
  });

  Call.hasMany(Answer)

  return Call;
};
